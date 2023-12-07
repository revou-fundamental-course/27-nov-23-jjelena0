cal = () => {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    const Luas = (a*b)/2

    document.getElementById("ans").innerHTML = "Hasil: "+Luas;

}

cal = () => {
    const c = parseInt(document.getElementById("c").value);
    const d = parseInt(document.getElementById("d").value);
    const e = parseInt(document.getElementById("e").value);

    const Keliling = (c+ d+e)

    document.getElementById("ans").innerHTML = "Hasil: "+Keliling;

}