function constructionCrew(objectInput) {

    let newObj = {...objectInput};

    if (newObj.dizziness === true) {
        newObj.levelOfHydrated += 0.1 * newObj.weight * newObj.experience;
        newObj.dizziness = false;
        return newObj;
    }

    return newObj;
}

// constructionCrew({ weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true });

constructionCrew({ weight: 120,
 experience: 20,
 levelOfHydrated: 200,
 dizziness: true });

//  constructionCrew({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false }
//    );