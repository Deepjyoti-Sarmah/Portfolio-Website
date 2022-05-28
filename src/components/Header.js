// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Deepjyoti Sarmah" />

            <div className='header__content'>
                <h1>Hi, I'm Deepjyoti Sarmah</h1>
                <p>Developer | Programmer | Tech Savvy </p>
                <a href="mailto:deepjyotisarmah37@gmail.com" className="button">Get in Touch</a>
            </div>
        </section>
    );
}

export default Header;