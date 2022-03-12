import React from "react";
import renderer from "react-test-renderer";
import ExerciceCard from "../components/exercice/ExerciceCard";

test("Card pour afficher un exo", () => {
  const data = {
    _id: "1",
    nom: "La suite de vanErk",
    difficulte: 8,
    theme: ["suites", "fichiers", "mathématiques"],
    langage: "c",
    template:
      '#include <stdlib.h>\n#include <stdio.h>\n\nvoid vanErk(int K_MAX) \n{\n    /*K_MAX = what is the maximum K allowed to appear in the sequence*/\n    FILE *fp;\n       fp = fopen("./outputVE.txt", "w+");\n    \n}',
    correction:
      '#include <stdlib.h>\n#include <stdio.h>\n\nvoid vanErk(int K_MAX) \n{\n    /*K_MAX = what is the maximum K allowed to appear in the sequence*/\n    FILE *fp;\n       fp = fopen("./outputVE.txt", "w+");\n    \n    int* lastSeen = (int*)calloc(K_MAX,sizeof(int));\n    int lastNum, i, tmpI = 0;\n    while(lastNum < K_MAX)\n    {\n        i++;\n        // Step 1 : print the last number\n        fprintf(fp, "%d, ", lastNum);\n        // Step 2 : find when that last number was printed and throw the diff for the last num\n        tmpI = lastNum;\n        lastNum=!lastSeen[lastNum]?0:i-lastSeen[lastNum];\n        // Step 3 : reload the last time i saw the last last num \n        lastSeen[tmpI]=i;\n    }\n    fprintf(fp, "%d, ", lastNum);\n    free(lastSeen);\n    fclose(fp);\n}',
    aides: [
      'penser à utiliser un fichier sous le nom "outputVE.txt" en mode écriture',
    ],
    auteurs: ["Le Mathématicien refoulé du groupe", "Jacques-Olivier Lachaud"],
    enonce:
      'Ecrivez un programme qui imprime dans un fichier la séquence de van erk (voir le lien : https://www.youtube.com/watch?v=etMJxB-igrc&pp=ugMICgJmchABGAE%3D). Le fichier pour K_MAX = 5 doit contenir "0, 0, 1, 0, 2, "',
    dataset: [],
    __v: 0,
  };

  const component = renderer.create(<ExerciceCard data={data} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
