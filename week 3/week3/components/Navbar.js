
function Navbar () {

    return (
    <div class="navbar">
        <div class="neoimg">
        <img src="https://intranetneo.certi.org.br/neo.svg" width={'90%'}/>
        </div>
        <div class="white-box"></div>
        <div>
            <div class="shadows">
            <img src="https://cdn-icons-png.flaticon.com/128/263/263115.png" class="navlogos"/>
            <button class="buttons">Home</button>
            </div>
            <br />
            <div class="shadows">
            <img src="https://cdn-icons-png.flaticon.com/128/2550/2550223.png" class="navlogos"/>
            <button class="buttons">Favoritos</button>
            </div>
            <br />
            <div class="shadows">
            <img src="https://cdn-icons-png.flaticon.com/128/4716/4716740.png" class="navlogos"/>
            <button class="buttons">Histórico</button>
            </div>
        </div>
        <div class="white-box2"></div>

    </div>
);}

export default Navbar;