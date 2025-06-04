// Script para mostrar/ocultar informações adicionais
document.getElementById("showMoreButton").addEventListener("click", function() {
  var additionalInfo = document.getElementById("additionalInfo");
  
  if (additionalInfo.classList.contains("hidden")) {
    additionalInfo.classList.remove("hidden");
    this.textContent = "Mostrar Menos";
  } else {
    additionalInfo.classList.add("hidden");
    this.textContent = "Saiba Mais";
  }
});
