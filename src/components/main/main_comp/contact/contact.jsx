import "./contact.css"

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contato">
                <h1>Contato</h1>
                <div className="imagemContato fade-in-section">
                    <div className="div">
                        <div className="imagemContatar">
                            <p className="descricaoHidden">Entre em contato conosco para mais informações!</p>
                        </div>
                    </div>

                    <div className="contatoContato">
                        <a className="contatoS" href="https://www.linkedin.com/in/heitor-vaz-657a00354/" target="_blank">
                            <i className="fa-brands fa-linkedin iconS"></i>
                        </a>
                        <a className="contatoS" href="https://wa.me/5562995635794" target="_blank">
                            <i className="fa-brands fa-whatsapp iconS"></i>
                        </a>
                        <a className="contatoS" href="https://github.com/Heitorvazeg" target="_blank">
                            <i className="fa-brands fa-github iconS"></i>
                        </a>
                        <a className="contatoS" href="mailto:heitorvazeg@gmail.com" target="_blank">
                            <i className="fa-solid fa-envelope iconS"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
