function somPom() {
    document.querySelector('#som_tecla_pom').play() //o play é pra reproduzir um som a partir da função "play()"
}
document.querySelector('.tecla_pom').onclick = somPom //está sem parenteses pra não executar ela no mesmo momento que é recarregada
//nao foi colocado o onclick no html porque não é boa prática usar js inline

function somClap() {
    document.querySelector('#som_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick = somClap

function somTim() {
    document.querySelector('#som_tecla_tim').play()
}
document.querySelector('.tecla_tim').onclick = somTim