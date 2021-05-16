export function formatData(data) {
    const thing = data.Labels;
    const isNoPerson = !thing.find(element => element.Name === "Person");
    const nbPersons = thing.find(element => element.Name === "Person")?.Instances.length;
    const thingFiltered = thing.filter(element =>
        element.Name !== "Person" &&
        element.Name !== "Human" &&
        element.Parents.length > 0 &&
        !element.Parents.find(elem => elem.Name === "Person")
    );

    const objects = thingFiltered.map(element => element.Name).join(",");

    return {
        objects: objects,
        persons: isNoPerson ? 0 : (nbPersons > 1 ? nbPersons : 1)
    };
}