# Boolzapp

Utilizzo di vue-3, bootstrap.

# Funzionalità:

● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco);

● Visualizzazione dinamica della lista contatti: visualizzare nome, ora ultimo messaggio inviato/ricevuto e immagine di ogni contatto;

● Visualizzazione dinamica dei messaggi: visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione con l'ora del messaggio inviato;

● Click sul contatto mostra la conversazione del contatto cliccato;

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde; L'utente non può inviare un messaggio vuoto o composto solamente da spazi;

● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà una risposta scelta in maniera casuale da una lista predisposta, che apparirà dopo 1 secondo;

● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite;

● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato;

● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti;

● L'icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. Il messaggio si invia anche cliccando sull'icona dell'aeroplano;

● Sotto al nome del contatto nella parte in alto a destra, cambia l'indicazione dello stato: visualizza il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantiene la scritta "online" per un paio di secondi e infine visualizza "ultimo accesso alle xx:yy" con l'orario corretto;

● Possibilità di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra);

● Possibilità di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto. Nel caso questa non sia presente inserire una immagine di riserva;

● Scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione;

● Aggiunta delle emoticons tramite l'utilizzo di una libreria;

# Grafica: 

● Visualizzazione un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi;

● Slash page visibile per 1s all'apertura dell'app;

● App responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. Icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti;

● Icona per ingrandire o rimpicciolire il font;

● Icona per cambiare la modalità light/dark;
