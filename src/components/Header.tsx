interface Props {
    schoolYear: number;
}

const Header = (props: Props) => {
    let { schoolYear } = props;

    return (
        <>
            <header>
                <h1>Simulateur Baccalauréat OIB</h1>
            </header>
            <p>Ce simulateur vous permet de calculer votre moyenne au bac et de prédire votre mention.</p>
            <p>C'est le seul simulateur tenant compte de la filière OIB en {schoolYear} !</p>
        </>
    );
};

export default Header;
