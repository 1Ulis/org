
import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/RazielAtem">
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/razielnecros/">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <strong>Desarrollado por Ulises</strong>
    </footer>
}

export default Footer 