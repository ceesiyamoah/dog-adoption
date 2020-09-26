const Pet = ({ name, animal, breed }) =>
{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () =>
{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, 'Adopt me!'),
        React.createElement(Pet, {
            name: "Pepsi",
            animal: "Dog",
            breed: "Daschund",
        }),
        React.createElement(Pet, { name: "Luna", animal: "Cat", breed: "Siamese" }),
        React.createElement(Pet, {
            name: "Els",
            animal: "mouse",
            breed: "troublesome",
        }),
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
