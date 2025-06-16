function mostrarImportancia() {
  const lista = document.getElementById("lista-importancia");
  lista.innerHTML = "";

  const pontos = [
    "Geração de empregos no campo e na cidade.",
    "Movimenta o comércio local e serviços.",
    "Ajuda na arrecadação de impostos.",
    "Fortalece a cultura e identidade rural.",
    "Incentiva inovação com novas tecnologias.",
    "Garante alimentos frescos e saudáveis para a população."
  ];

  pontos.forEach(ponto => {
    const item = document.createElement("li");
    item.textContent = ponto;
    lista.appendChild(item);
  });
}
const ctx = document.getElementById('graficoAgro').getContext('2d');
const graficoAgro = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Empregos', 'Economia', 'Tecnologia', 'Cultura', 'Alimentos'],
    datasets: [{
      label: 'Impacto do Agro',
      data: [80, 70, 60, 50, 90],
      backgroundColor: '#74c365'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
