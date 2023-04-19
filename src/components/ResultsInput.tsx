import { useState } from "react";

const subjects = [
    {
        subjectTypeName: "Contrôle continu",
        tests: [
            {
                name: "Enseignement scientifique",
                coefficients: [3, 3],
                results: [0, 0],
            },
            {
                name: "Histoire-géographie",
                coefficients: [3, 3],
                results: [0, 0],
            },
            {
                name: "Langue vivante A",
                coefficients: [3, 3],
                results: [0, 0],
            },
            {
                name: "Langue vivante B",
                coefficients: [3, 3],
                results: [0, 0],
            },
            {
                name: "Enseignement de spécialité 1",
                coefficients: [8, 0],
                results: [0, -1],
            },
            {
                name: "EPS",
                coefficients: [0, 6],
                results: [-1, 0],
            },
            {
                name: "Enseignement moral et civique",
                coefficients: [1, 1],
                results: [0, 0],
            },
            {
                name: "Enseignement optionnel 1",
                coefficients: [2, 2],
                results: [0, 0],
                optional: true,
            },
            {
                name: "Enseignement optionnel 2",
                coefficients: [0, 2],
                results: [-1, 0],
                optional: true,
            },
            {
                name: " Langues et cultures de l'Antiquité 1",
                coefficients: [2, 2],
                results: [0, 0],
                optional: true,
            },
            {
                name: " Langues et cultures de l'Antiquité 2",
                coefficients: [2, 2],
                results: [0, 0],
                optional: true,
            },
        ],
    },
    {
        subjectTypeName: "Épreuves finales",
        tests: [
            {
                name: "Épreuve Anticipée de Français - écrit",
                coefficients: [5, 0],
                results: [0, -1],
            },
            {
                name: "Épreuve Anticipée de Français - oral",
                coefficients: [5, 0],
                results: [0, -1],
            },
            {
                name: "Philosophie",
                coefficients: [0, 8],
                results: [-1, 0],
            },
            {
                name: "Enseignement de spécialité 2",
                coefficients: [0, 16],
                results: [-1, 0],
            },
            {
                name: "Enseignement de spécialité 3",
                coefficients: [0, 16],
                results: [-1, 0],
            },
            {
                name: "Grand oral",
                coefficients: [0, 10],
                results: [-1, 0],
            },
        ],
    },
];

console.clear();

const ResultsInput = () => {
    const [grades, setGrades] = useState(() => subjects[1].tests[0].results[0]);

    let newSubjects = JSON.parse(JSON.stringify(subjects));

    return (
        <>
            {subjects.map((type) => (
                <>
                    <h2>{type.subjectTypeName}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Première</th>
                                <th>Terminale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {type.tests
                                .filter((e) => !e.optional)
                                .map((s) => {
                                    return (
                                        <tr>
                                            <td onClick={() => setGrades((grades) => grades + 1)}>
                                                {s.name}, {grades}
                                            </td>
                                            <td>{s.coefficients[0]}</td>
                                            <td>{s.coefficients[1]}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </>
            ))}
        </>
    );
};

export default ResultsInput;
