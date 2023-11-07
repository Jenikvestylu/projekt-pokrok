document.addEventListener('DOMContentLoaded', function() {
    const obrazek = document.getElementById('obrazek');
    const tlacitkoStart = document.getElementById('tlacitkostart');
    const buttons = document.querySelectorAll('[id^="b"]');

    let currentQuestionIndex = 0;
    let correctAnswerShown = false;
    let correctAnswerColor = 'blue';

    function toggleButtonsVisibility(show) {
        for (const button of buttons) {
            button.style.display = show ? 'block' : 'none';
        }
    }

    const questions = [
        "Jaký je hlavní město Thajska?",
        "Jak dlouhé máš péro?",
        "Jakou barvu má tvoje buggati?",
        "Jakou jinou přezdívkou se nazýva Andrew Tate?",
        "Jak moc velké problémy má Martin?",
        "Kolik nohou má Adam?",
        "Kolikrát se Matyáš se Stejskym zeptali učitelů jak se mají?",
        "Kolik stojí v dnešní době Lays solené v kaufu?",
        "Kolik lidí se těší na zájezd do Lotyšska?",
        "Kolik je v téhle době v Žatci prodejců pika?",
        "Co je podle Adama nápoj který ničí zdravý ale sám ho pije?",
        "Jaké skryté rasi je Dzejkob?",
        "Co Adam vetšinou kreslí v malování když má pracovat na projektu? (Klíčové písmena HK)",
        "Kolik přesně lidí si píše zápisky z ČJ?",
        "Kolik nepřizpůsobyvých občanů Žatce vetšinou potkáte když čekáte na busáku?",
        "Jakou hudbu Šíma poslouchá ve fitku? (je to něco, co normální smrtelník nezná)",
        "S čím se Begy spawnul a sešvihal naše kamarády?",
        "Jakou rychlostí běží Begy domů aby ho nikdo nedohnal?",
        "Kolik chromosomů má Begy navíc? (Napiš slovy)",
        "Kolik měří Martin cm? (není to v metrech)",
        "Kolikrát se mi zasekla ta vyjebaná bageta v automatu?",
        "Shrek is love shrek is ....?",
        "Kolik stojí kafe z automatu?",
        "Kolikrát byl Matyáš seřvaný u fotbálku paní Donátovou?",
        "Jaký je nejčastější slovo co lidi používají ve Valorantu?",
        "Jakou nemoc způsobuje hra League of Legends?",
        "Jaká je průměrná známka žáka naší třídy z matiky?",
        "Kolik tiktoků průměrný žák naší třídy zhlédne za 1 hodinu Českého jazyka?"
    ];

    const correctAnswers = [
        "Bangkok",
        "Nemám péro",
        "Žádné nemám",
        "Top G",
        "Malinké",
        "8",
        "Nespočetně mnohokrát",
        "65",
        "0",
        "Hodně",
        "Energyťák",
        "Asiat",
        "Hákový Kříž",
        "0",
        "5",
        "Hřebíky",
        "Klacek",
        "Rychlostí světla",
        "Nekonečno",
        "69",
        "50",
        "life",
        "10",
        "Hodněkrát",
        "Kys",
        "Rakovinu",
        "4",
        "150"
    ];

    tlacitkoStart.addEventListener('click', function() {
        obrazek.src = 'Bulk.png';
        tlacitkoStart.style.display = 'none';
        toggleButtonsVisibility(true);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                checkAnswer(questions[i], correctAnswers[i], buttons[i]);
            });
        }
    });

    function checkAnswer(question, correctAnswer, button) {
        if (correctAnswerShown) {
            return;
        }

        const userAnswer = prompt(question);
        if (userAnswer !== null) {
            if (userAnswer === correctAnswer) {
                button.style.backgroundColor = 'blue';
                alert('Správná odpověď!');
                correctAnswerShown = false;
                button.disabled = true;
            } else {
                button.style.backgroundColor = 'black';
                alert('Špatná odpověď. Zkus to znovu.');
            }
        }
    }

    toggleButtonsVisibility(false);
});
