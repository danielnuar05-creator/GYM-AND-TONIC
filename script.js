// DATA COMPLETA
const data = {

rutinas:{
titulo:"Rutinas adaptadas",
desc:"Programas de entrenamiento personalizados para mejorar fuerza, hipertrofia y resistencia.",
incluye:[
"Rutinas Full Body",
"Push Pull Legs",
"División muscular",
"Entrenamiento funcional"
],
beneficios:[
"Aumento muscular",
"Mejor condición física",
"Más fuerza",
"Mayor resistencia"
],
ejemplos:[
"Pecho + tríceps",
"Espalda + bíceps",
"Pierna completa",
"Core + cardio"
],
extra:[
"Descansa correctamente",
"Usa buena técnica",
"Progresión semanal"
],
duracion:"4 a 8 semanas",
frecuencia:"4-6 días",
nivel:"Todos",
objetivo:"Hipertrofia y fuerza",
imgs:[
"https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200",
"https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200",
"https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200",
"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200"
]
},

consejos:{
titulo:"Consejos fitness",
desc:"Aprende hábitos correctos para entrenar de forma eficiente y segura.",
incluye:[
"Calentamiento",
"Estiramientos",
"Técnica correcta",
"Descanso muscular"
],
beneficios:[
"Evitas lesiones",
"Más rendimiento",
"Mejor recuperación",
"Progreso constante"
],
ejemplos:[
"Hidratarse",
"Dormir bien",
"No sobreentrenar"
],
extra:[
"7-8h de sueño",
"Buena alimentación",
"Constancia"
],
duracion:"Continua",
frecuencia:"Diaria",
nivel:"Todos",
objetivo:"Optimizar resultados",
imgs:[
"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
"https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200",
"https://images.unsplash.com/photo-1594737625785-cb0d6a41f08c?q=80&w=1200",
"https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200"
]
},

frases:{
titulo:"Motivación",
desc:"Mentalidad positiva para seguir progresando cada día.",
incluye:[
"Disciplina",
"Constancia",
"Superación",
"Objetivos"
],
beneficios:[
"Más motivación",
"Mayor enfoque",
"Mejor mentalidad"
],
ejemplos:[
"No te rindas",
"La disciplina vence",
"Sin excusas"
],
extra:[
"Confía en el proceso",
"Sé constante",
"Visualiza tu meta"
],
duracion:"Siempre",
frecuencia:"Diaria",
nivel:"Todos",
objetivo:"Motivación mental",
imgs:[
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
"https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200",
"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200",
"https://images.unsplash.com/photo-1526401485004-2aa7e62c7d1c?q=80&w=1200"
]
},

alimentacion:{
titulo:"Alimentación fitness",
desc:"Nutrición equilibrada para mejorar el rendimiento y recuperación.",
incluye:[
"Proteínas",
"Carbohidratos",
"Grasas saludables",
"Hidratación"
],
beneficios:[
"Más energía",
"Recuperación muscular",
"Ganancia muscular"
],
ejemplos:[
"Avena + huevos",
"Arroz + pollo",
"Pescado + verduras"
],
extra:[
"Evita ultraprocesados",
"Come equilibrado",
"Toma agua"
],
duracion:"Diaria",
frecuencia:"Constante",
nivel:"Todos",
objetivo:"Nutrición deportiva",
imgs:[
"https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200",
"https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=1200",
"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200",
"https://images.unsplash.com/photo-1505253210343-1c2d3d5e4f0b?q=80&w=1200"
]
},

top:{
titulo:"Top ejercicios",
desc:"Ejercicios fundamentales para ganar fuerza y músculo.",
incluye:[
"Sentadilla",
"Peso muerto",
"Dominadas",
"Press banca"
],
beneficios:[
"Mayor fuerza",
"Más masa muscular",
"Mejor rendimiento"
],
ejemplos:[
"Pierna completa",
"Espalda",
"Pecho"
],
extra:[
"Técnica correcta",
"Peso progresivo",
"Calienta antes"
],
duracion:"Variable",
frecuencia:"3-5 días",
nivel:"Intermedio",
objetivo:"Máximo rendimiento",
imgs:[
"https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1200",
"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200",
"https://images.unsplash.com/photo-1598971639058-9991d9f1d9b4?q=80&w=1200",
"https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200"
]
}

};

// IR A SECCIÓN
function irSeccion(s,btn){

document.getElementById("inicio").style.display="none";
document.getElementById("seccion").style.display="block";

const d = data[s];

document.getElementById("seccion").innerHTML = `
<h1>${d.titulo}</h1>

<p>${d.desc}</p>

<h3>Incluye</h3>
<ul>${d.incluye.map(i=>`<li>${i}</li>`).join("")}</ul>

<h3>Beneficios</h3>
<ul>${d.beneficios.map(i=>`<li>${i}</li>`).join("")}</ul>

<h3>Ejemplos</h3>
<ul>${d.ejemplos.map(i=>`<li>${i}</li>`).join("")}</ul>

<h3>Consejos extra</h3>
<ul>${d.extra.map(i=>`<li>${i}</li>`).join("")}</ul>

<p><strong>Duración:</strong> ${d.duracion}</p>
<p><strong>Frecuencia:</strong> ${d.frecuencia}</p>
<p><strong>Nivel:</strong> ${d.nivel}</p>
<p><strong>Objetivo:</strong> ${d.objetivo}</p>

<h3>Galería</h3>

<div class="galeria">
${d.imgs.map(img=>`<img src="${img}">`).join("")}
</div>
`;

if(btn) activar(btn);
}

// VOLVER
function irInicio(btn){

document.getElementById("inicio").style.display="block";

document.getElementById("seccion").style.display="none";

activar(btn);
}

// BOTÓN ACTIVO
function activar(btn){

document
.querySelectorAll(".nav")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

}
