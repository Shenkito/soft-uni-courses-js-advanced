class JobOffers {
    constructor(employer, possition) {
        this.employer = employer;
        this.possition = possition;
        this.jobCandidates = [];
    }


    jobApplication(candidates) {
        let addedCandidates = [];

        candidates.forEach(candidateInfo => {
            let [name, education, yearsExperience] = candidateInfo.split('-');
            let existingCandidate = this.jobCandidates.find(candidate => candidate.name === name);

            if (existingCandidate) {
                if (parseInt(yearsExperience) > parseInt(existingCandidate.yearsExperience)) {
                    existingCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({
                    name: name,
                    education: education,
                    yearsExperience: yearsExperience
                });

                addedCandidates.push(name);
            }
        });

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        let selectedCandidate = this.jobCandidates.find(candidate => candidate.name === name);

        if (!selectedCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (parseInt(minimalExperience) > parseInt(selectedCandidate.yearsExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        selectedCandidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let selectedCandidate = this.jobCandidates.find(candidate => candidate.name === name);

        if (!selectedCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary = "40,000";
        if (selectedCandidate.education === 'Bachelor') {
            salary = "50,000";
        } else if (selectedCandidate.education === 'Master') {
            salary = "60,000";
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        let databaseOutput = "Candidates list:\n";

        sortedCandidates.forEach(candidate => {
            databaseOutput += `${candidate.name}-${candidate.yearsExperience}\n`;
        });

        return databaseOutput.trim();
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));


// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

