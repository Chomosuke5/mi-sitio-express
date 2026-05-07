const mainController = {
    home: (req, res) => {
        res.render("home", { title: "Inicio" });
    },
    about: (req, res) => {
        res.render("about", { title: "Acerca de" });
    },
    contact: (req, res) => {
        res.render("contact", { title: "Contacto" });
    },
    services: (req, res) => {
        res.render("services", { title: "Servicios" });
    },
    processContact: (req, res) => {
        const { nombre, email, mensaje } = req.body;

        console.log("Formulario de contacto recibido:");
        console.log({ nombre, email, mensaje });

        res.render("contact-success", {
            title: "Mensaje enviado",
            nombre,
            email
        });
    }
};

module.exports = mainController;
