import Picker from './emoji-picker.js';

const { createApp } = Vue

createApp({
    data() {
        return {
            fontSize: 6,
            splashScreen: true,
            showEmoji: true,
            lastAc: '',
            contactName: '',
            contactUrl: '',
            date: new Date(),
            activeChat: -1,
            msg: '',
            addText: '',
            date: new Date(),
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            quickReplies: [
                'Ok',
                'Al momento sono occupato. Parliamo più tardi',
                'In riunione. Ti chiamo più tardi.',
                'Al momento sono un po\' occupato. Chiama più tardi, grazie.',
                'Grazie!',
                'xD'
            ]
        }
    },
    methods: {
        /**
         * 
         * @param {int} index 
         */
        selectContact(index) {
            const contactsListEl = document.getElementById('contacts_list');
            const chatSectionEl = document.getElementById('chat_section');

            //console.log('clicked', index);
            this.activeChat = index;

            contactsListEl.classList.toggle('d-none')
            contactsListEl.classList.toggle('d-md-block')
            chatSectionEl.classList.toggle('d-none')
        },

        /**
         * 
         * @param {int} activeChat 
         * @returns string of date
         * se la data è uguale ad oggi scrivi oggi, altrimenti la data completa dell'ultimo messaggio
        */
        lastAccess(activeChat) {
            const messagesArray = this.contacts[activeChat].messages;
            const lastItemMessagesArray = messagesArray[messagesArray.length - 1];

            const dateLastMessageSent = lastItemMessagesArray.date.slice(0, 10); //return GG/MM/AAAA
            const hourLastMessageSent = lastItemMessagesArray.date.slice(11, 16); //return HH:MM

            /* console.log(dateLastMessageSent);
            console.log(hourLastMessageSent); */

            /* console.log(this.nowDateInString().slice(0, 10)); */

            if (dateLastMessageSent == this.nowDateInString().slice(0,
                10)) {
                return 'Ultimo accesso oggi alle ' + hourLastMessageSent
            } else {
                return 'Ultimo accesso il ' + dateLastMessageSent + ' alle ' + hourLastMessageSent
            }
        },

        /**
         * 
         * @param {int} activeChat 
         */
        sendMsg(activeChat) {
            /* ORA IN FORMATO GG/MM/AAAA HH:MM:SS */
            const dateStr = this.nowDateInString()
            //console.log(dateStr);

            //console.log(this.msg);
            if (this.msg.length > 0) {
                this.contacts[activeChat].messages.push({
                    date: dateStr,
                    message: this.msg,
                    status: 'sent'
                })

                this.msg = '';

                this.modifyLastAccess(activeChat)
            }

            this.scrollToBottom();
        },

        /**
         * 
         * @param {int} activeChat 
         * Appena invio il messaggio, l'interlocutore inizia a scrivere per 1 secondo e risulta che sta scrivendo. Successivamente per tot secondi risulterà online, poi uscirà e verrà mostrato l'orario
         */
        modifyLastAccess(activeChat) {
            this.lastAc = 'Sta scrivendo...'
            setTimeout(() => {
                this.autoMsg(activeChat)
                this.lastAc = 'Online'

                setTimeout(() => {
                    this.lastAc = this.lastAccess(activeChat);
                }, 3000)

            }, 1000)
        },

        /**
         * 
         * @param {int} activeChat 
         */
        autoMsg(activeChat) {
            /* ORA IN FORMATO GG/MM/AAAA HH:MM:SS */
            const dateStr = this.nowDateInString()
            const quickReply = this.quickReplies[Math.floor(Math.random() * this.quickReplies.length)]

            this.contacts[activeChat].messages.push({
                date: dateStr,
                message: quickReply,
                status: 'received'
            })

            this.scrollToBottom();
        },

        /**
         * 
         * @param {Object} message 
         * @param {int} activeChat 
         */
        deleteMessage(message, activeChat) {
            const nIndex = this.contacts[activeChat].messages.indexOf(message); //risalgo all'indice nell'array del messaggio

            this.contacts[activeChat].messages.splice(nIndex, 1)
        },

        /**
         * 
         * @returns {string} GG/MM/AAAA HH:MM:SS
         */
        nowDateInString() {
            /* ORA IN FORMATO GG/MM/AAAA HH:MM:SS */
            let dateStr =
                ("00" + this.date.getDate()).slice(-2) + "/" +
                ("00" + (this.date.getMonth() + 1)).slice(-2) + "/" +
                this.date.getFullYear() + " " +
                ("00" + this.date.getHours()).slice(-2) + ":" +
                ("00" + this.date.getMinutes()).slice(-2) + ":" +
                ("00" + this.date.getSeconds()).slice(-2);
            return dateStr
        },

        /**
         * 
         * @param {int} activeChat 
         * svuota l'array dei messaggi
         */
        deleteAllMessage(activeChat) {
            this.contacts[activeChat].messages = [];
        },

        /**
         * 
         * @param {int} activeChat 
         * elimina il messaggio selezionato
         */
        deleteChat(activeChat) {
            this.contacts.splice(this.contacts[activeChat], 1);
            this.activeChat = -1;

            this.backToList();
        },

        /**
         * cambia icona e testo dell'active notification
         */
        activeNotification() {
            const activeNotiEl = document.getElementById('text_active_notification');
            const slashBellEl = document.querySelector('.fa-bell-slash');
            activeNotiEl.classList.toggle('d-none');
            slashBellEl.classList.toggle('d-none');

            const disactiveNotiEl = document.getElementById('text_disactive_notification');
            const bellEl = document.querySelector('.fa-bell');
            disactiveNotiEl.classList.toggle('d-none')
            bellEl.classList.toggle('d-none')
        },

        /**
         * Aggiunge un contatto all'array contacts e chiude la modale
         */
        newContact() {
            const closeModalEl = document.getElementById('close_modal');

            event.preventDefault()

            if (this.contactName.length > 0) {
                let contact = {
                    name: this.contactName,
                    avatar: this.contactUrl,
                    visible: true,
                    messages: [],
                };
                this.contacts.push(contact);
            }
            closeModalEl.click();
        },

        /**
         * 
         * @param {string} fullName 
         * @returns first letters of name
         */
        getFirstLetters(fullName) {
            const firstLetterArray = fullName.split(' ').map((word) => {
                return word.charAt(0)
            });

            return firstLetterArray.join('').toUpperCase()
        },

        /**
         * attiva disattiva dark mode
         */
        toggleDark() {
            const wrapperEl = document.getElementById('wrapper');
            const lightBtnEl = document.getElementById('light_mode');
            const darkBtnEl = document.getElementById('dark_mode');

            wrapperEl.classList.toggle('dark');
            lightBtnEl.classList.toggle('d-none');
            darkBtnEl.classList.toggle('d-none');
        },

        /**
         * on mobile phone
         */
        backToList() {
            const contactsListEl = document.getElementById('contacts_list');
            const chatSectionEl = document.getElementById('chat_section');

            contactsListEl.classList.toggle('d-none')
            contactsListEl.classList.toggle('d-md-block')
            chatSectionEl.classList.toggle('d-none')
        },

        /**
         * on click, change showEmoji value to true
         */
        openEmoji() {
            this.showEmoji = true;
        },

        /**
         * on click, change showEmoji value to false
         * 
         */
        closeEmoji() {
            this.showEmoji = false;
        },

        /**
         * 
         * @param {*} emoji 
         */
        onSelectEmoji(emoji) {
            console.log(emoji)
            this.msg += emoji.i;
            /*
              // result
              { 
                  i: "😚", 
                  n: ["kissing face"], 
                  r: "1f61a", // with skin tone
                  t: "neutral", // skin tone
                  u: "1f61a" // without tone
              }
              */
        },

        /**
         * increase font size
         */
        increaseFontSize() {
            this.fontSize = 5
        },

        /**
         * decrease font size
         */
        decreaseFontSize() {
            this.fontSize = 6
        },

        /**
         * when a new message is sent the chat scrolls down
         */
        scrollToBottom() {
            this.$nextTick(function () {
                const chat = this.$refs.messageDisplay;
                chat.scrollTop = chat.scrollHeight;
            });
        }
    },
    computed: {
        /**
        * @returns {user.visible == true OR == false}
        */
        searchFilter() {
            //console.log(this.addText);
            this.contacts.forEach(user => {
                const nameInLowerCase = user.name.toLowerCase();

                if (!nameInLowerCase.includes(this.addText.toLowerCase())) {
                    return user.visible = false //se non hanno la stringa diventano false
                } else {
                    return user.visible = true
                }
            });
        },
    },
    mounted() {
        /**
         * set the splashScreen to false after 1second
         */
        setTimeout(() => {
            this.splashScreen = false;
        }, 1000)
    },
}).component('Picker', Picker).mount('#app');