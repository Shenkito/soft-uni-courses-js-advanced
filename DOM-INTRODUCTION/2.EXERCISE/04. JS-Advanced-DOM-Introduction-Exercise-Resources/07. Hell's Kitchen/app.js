function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector("#inputs>textarea");
   let bestRestaurantResult = document.querySelector("#bestRestaurant>p");
   let workersResult = document.querySelector("#workers>p");

   function onClick() {

      let arrInput = JSON.parse(input.value);
      let restaurants = {};

      for (let line of arrInput) {
         let currLine = line.split(" - ");
         let restaurantName = currLine[0];
         let workerInfo = currLine[1].split(", ");
         let workers = [];

         for (let currWorker of workerInfo) {
            let currWorkerInfo = currWorker.split(" ");
            let currWorkerName = currWorkerInfo[0];
            let currWorkerSalary = Number(currWorkerInfo[1]);

            workers.push({ name: currWorkerName, currWorkerSalary });
         }
         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = workers;
         } else {
            restaurants[restaurantName] = restaurants[restaurantName].concat(workers);
         }
      }

      let bestRestaurant = null;
      let bestAverageSalary = 0;

      for (let name in restaurants) {
         let workers = restaurants[name];

         workers.sort((worker1, worker2) => worker2.currWorkerSalary - worker1.currWorkerSalary);

         let bestSalary = workers[0].currWorkerSalary;
         let avgSalary = workers.reduce((sum, worker) => sum + worker.currWorkerSalary, 0) / workers.length;

         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary,
         };

         if (avgSalary > bestAverageSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].avgSalary
            }
            bestAverageSalary = avgSalary;
         }

         bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

         let resultWorkers = [];

         bestRestaurant.workers.forEach(worker => {
            resultWorkers.push(`Name: ${worker.name} With Salary: ${worker.currWorkerSalary}`);
         });

         workersResult.innerText = resultWorkers.join(" ");
      }
   }
}

