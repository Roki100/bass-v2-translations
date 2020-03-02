lang = {
    DEFAULT: (key) => `${key} has not been translated for en-US yet.`,
    DEFAULT_LANGUAGE: 'Default Language',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `De ingestelde prefix${Array.isArray(prefix) ?
        `en voor deze server zijn: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` voor deze server is: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `De prefix is veranderd naar \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `Op dit moment is de prefix dit: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Veranderd/toont de ingestelde server prefix',
    PREFIX_LENGTH: '**Je kan de prefix niet langer dan 10 karakters maken!**',
    // SHIT
    COOLDOWN_TITLE: 'Afkoeltijd',
    COOLDOWN: (remaining) => `Je moet nog ${remaining} second${remaining === 1 ? '' : 'en'} wachten.`,
    COMMAND_DISABLED_SERVER: 'Dit commando is uitgezet in deze server.',
    COMMAND_DISABLED_GLOBAL: 'Dit commando is op dit moment niet beschikbaar.',
    MISSING_BOTPERMS: (missing) => `Ik heb onvoldoende rechten om dit command the kunnen uitvoeren, De **${missing}** permissie ontbreekt.`,
    NSFW: 'Dit commando kan alleen in een NSFW kanalen gebruikt worden!',
    NO_PERMISSIONS: 'Je hebt geen recht om dit commando uit te voeren!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Deze server server ontbreekt de **${settings.join(', ')}** server instelling${settings.length !== 1 ? 'en' : ''}, daardoor kan ik dit commando niet uitvoeren.`,
    RUNIN: (types) => `Dit commando kan alleen uitgevoerd worden in \`${types}\` kanalen!`,
    RUNIN_NONE: (name) => `Het commando \`${name}\` is niet geconfigureerd om in een kanaal uitgevoerd te worden.`, 
    // EVAL
    COMMAND_EVAL_DESCRIPTION: 'Evalueerd gegeven code',
    COMMAND_EVAL_ERROR: (time, output, type) => `**Foutmelding**:${output}\n**Type**:${type}\n${time}`,
    COMMAND_EVAL_OUTPUT: (time, output, type) => `**Uitvoer**:${output}\n**Type**:${type}\n${time}`,
    COMMAND_EVAL_SENDFILE: (time, type) => `De uitvoer was te lang... het resultaat is verzonden als een bestand.\n**Type**:${type}\n${time}`,
    COMMAND_EVAL_SENDCONSOLE: (time, type) => `De uitvoer was te lang... het resultaat is verzonden naar de console.\n**Type**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nDe retour nam: \`Berekenen...\`.\nHartslag: \`Berekenen...\`.\nDatabank: \`Berekenen...\`.',
    PONG: (diff, ping, db) => `**Pong!**\nDe retour nam \`${diff}ms\`.\nHartslag: \`${ping}ms\`.\nDatabank: \`${db}ms\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Voeg Bass toe aan jouw server',
    BASS_INVITE: 'Voeg Bass toe aan jouw server!',
    // INFO
    INFO_DESCRIPTION: 'Informatie over Bass',
    // HELP
    HELP_DESCRIPTION: 'Geef dit bericht weer',
    HELP_NO_EXTENDED: 'Geen specifieke help beschikbaar',
    HELP_USAGE: (usage) => `Gebruik :: ${usage}`,
    HELP_EXTENDED: 'Specifieke Help ::',
    HELP_BOT_OWNER_ONLY: `Bot Eigenaar`,
    HELP_MANAGE_GUILD: `Serverbeheerder`,
    HELP_SERVER_OWNER: `Server eigenaar`,
    HELP_SYNTAX: (prefix) => `${prefix}commando - Beschrijving *(Vereiste permissies)*\nOm informatie te verkrijgen over hoe je een commando moet gebruiken, gebruik ${prefix}commando en het zal de gebruiksaanwijzing weergeven.\nBijvoorbeeld: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}commando - Beschrijving *(Vereiste permissies)*\nOm informatie te verkrijgen over hoe je een commando moet gebruiken, gebruik ${prefix}help (commando-naam)\nAls je een commando gebruikt dat argumenten nodig heeft maar er geen heeft gerkregen zal weergevn hoe je het commando moet gebruiken`,
    HELP_COMMANDS_STRING: `Commando's`,
    HELP_COMMAND_NOT_FOUND: (command) => `Het commando \`${command}\` werd niet gevonden.`,
    HELP_TITLE: 'Bass help',
    HELP_LINKS: 'Links',
    HELP_SUPPORT_SERVER: 'Support Server',
    HELP_INVITE: 'Invite',
    // STATS
    STATS_DESCRIPTION: 'Shows stats about Bass',
    CLUSTER: 'Cluster',
    ERROR: 'Error',
    SHARDS: 'Shards',
    SERVERS: 'Servers',
    USERS: 'Gebruikers',
    CONNECTIONS: 'Verbindingen',
    PLAYERS: 'Spelers',
    TOTAL: 'Totaal',
    CLUSTERS: 'Clusters',
    TOOK: (time) => `Het duurde ${time}`,
    STATS: 'Bass Statistieken',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `De taal \`${lang}\` werd niet gevonden.\nDe talen die je kan gebruiken zijn: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `De taal is veranderd naar \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**De geselecteerde taal is:**\`${clang}\`\n\nDe talen die je kan gebruiken zijn: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Veranderd/toont de geselecteerde server taal.',
    // TRANSLATORS
    TRANSLATORS_DESCRIPTION: 'Geeft elke vertaler weer die heeft geholpen om bass te vertalen naar andere talen',
    // SAY
    SAY_DESCRIPTION: 'Bass herhaalt een gegeven bericht',
    // SHARD
    SHARD_DESCRIPTION: 'Geeft informatie weer over de shards/clusers',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Deze server draait op shard \`${shard}/${shards}\` en cluster \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Bass support server',
    // MUSIC
    NODE_BUSY: 'Sorry maar de audio node waarop deze server draait **is op dit moment bezig**, wacht alsjeblieft een paar seconden en probeer opnieuw.',
    NODE_NOTHING_PLAYING: '**Op dit moment speelt er niks in deze server.**\nProbeer misschien iets af te spelen?',
    NODE_NOTHING_PLAYED: '**Er werd niks afgespeeld.**',
    NODE_PROCESSING: 'De audio node is je aanvraag aan verwerken...',
    H4DEEP_DESCRIPTION: 'Schakelt de geluids filter 4deep aan/uit',
    NODE_4DEEP_ENABLED: '**Schakelde de filter in** `4deep`.',
    NODE_4DEEP_DISABLED: '**Stopte de filter** `4deep`.',
    H8D_DESCRIPTION: 'Schakelt de geluids filter 8D aan/uit',
    NODE_8D_ENABLED: '**Schakelde de filter in** `8D`.',
    NODE_8D_DISABLED: '**Stopte de filter** `8D`.',
    ECHO_DESCRIPTION: 'Schakelt de geluids filter echo aan/uit',
    NODE_ECHO_ENABLED: '**Schakelde de filter in** `Echo`.',
    NODE_ECHO_DISABLED: '**Stopte de filter** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Schakelt de geluids filter nightcore aan/uit',
    NODE_NIGHTCORE_ENABLED: '**Schakelde de filter in** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Stopte de filter** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'Schakelt de geluids filter vaporwave aan/uit',
    NODE_VAPORWAVE_ENABLED: '**Schakelde de filter in** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Stopte de filter** `Vaporwave`.',
    BITRATE_DESCRIPTION: 'Veranderd de muziek bitrate/kwaliteit',
    NODE_CHANGED_BITRATE: (amount) => `De bitrate is veranderd naar \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Geef alsjeblieft een geldige bitrate van \`8\` tot \`512\` (kbs)', 
    CLEAR_DESCRIPTION: 'Leegd de queue',
    CLEARED_QUEUE: 'De queue is geleegd.',
    LOOP_DESCRIPTION: 'Herhaald het/de huidige lied/wachtrij',
    LOOP_SONG: '**Schakelde lied herhaling in.**',
    LOOP_QUEUE: '**Schakelde wachtrij herhaling in.**',
    LOOP_ALREADY_SONG: 'Het lied word al herhaalt',
    LOOP_ALREADY_QUEUE: 'De wachtrij word al herhaalt!',
    LOOP_DISABLED: '**Stopte de herhaling.**',
    LOOP_INVALID: (prefix) => `**Geef alsjeblieft een geldig herhalings type** \`(0 - stop, 1 - lied, 2 - wachtrij)\`\nBijvoorbeeld: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Geeft het huidige lied weer',
    NOWPLAYING: 'Huidig lied',
    PAUSE_DESCRIPTION: 'Pauzeert het lied',
    PAUSED: '**Gepauzeerd.**',
    RESUME_DESCRIPTION: 'Hervat het lied',
    RESUMED: '**Hervat.**',
    SHUFFLE_DESCRIPTION: 'Schudt de wachtrij',
    SHUFFLE_SHUFFLING: '**De wachtrij schudden...**',
    SHUFFLE_SHUFFLED: '**De wachtrij is geschud.**',
    QUEUE_DESCRIPTION: 'Geeft het huidige wachtrij weer',
    QUEUE_FETCHING: '**Wachtrij ophalen...**',
    QUEUE_MORE: (length) => `*.. en nog ${length} meer**`,
    QUEUE_NOWPLAYING: 'Huidige lied',
    QUEUE_UPNEXT: 'Volgende lied',
    QUEUE_NOTHING: '**Niks**',
    QUEUE_LENGTH: 'Wachtrij lengte:',
    QUEUE_FILTERS: 'Filters:',
    QUEUE_BASS_STRENGTH: 'Bass sterkte:',
    QUEUE_LOOP: '**Herhaling:**',
    QUEUE_SONG: 'Lied:',
    QUEUE_YES: 'ja',
    QUEUE_NO: 'neen',
    QUEUE: 'Queue:',
    SKIP_DESCRIPTION: 'Slaat het huidige nummer over.',
    SKIPPED: 'Overgeslaan',
    STOP_DESCRIPTION: 'Stopt met spelen, leegd de wachtrij en verlaat het geluidskanaal',
    STOPPED: 'Gestopt.',
    PREV_DESCRIPTION: 'Geeft het laatst gespeelde nummer weer.',
    RECENTLY_PLAYED: 'Laatst gespeeld:',
    VOLUME_DESCRIPTION: 'Veranderd het volume',
    VOLUME_CHANGED: (prev, amount) => `**Volume is veranderd van \`${prev}%\` naar \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**Het volume staat al op \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Geef me alsjeblieft een geldig volume van 0 tot 200 (%)\nHuidig volume is: \`${current}%\``,
    BASS_DESCRIPTION: 'Veranderde de bass boost sterkte',
    GIVE_PROPER_BASS: (current) => `Geef alsjeblieft een geldige bass boost van 0 tot 60 (dB)\nDe huidige bass boost is: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Veranderde de bass boost serkte naar** \`+${amount}dB\`\nBedankt om bass te supporten!`,
    PLAY_DESCRIPTION: 'Speeld een lied af',
    JOINING_VC_ERROR: 'Er is een onbekende error opgetreden toen ik je geluids kanaal wou joinen.\nProbeer alsjeblieft opnieuw.',
    QUEUED: (url, title) => `Voegde [${title}](${url}) toe aan de wachtrij.`, 
    QUEUED_NOW: (url, title) => `[${title}](${url}) zal nu afspelen.`,
    QUEUE_ENDED: 'De wachtrij is beindigd, ik heb het geluidskanaal verlaten.',
    PLAYING_ERROR: (error) => `Er is een fout opgetreden toen ik wou afspelen.\nFoutmelding: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate: \`${bitrate}kbps\`, Volume: \`${volume}%\`\nFilters toegevoegd: *${filters.join(', ') || '*-*'}*\nBass Boost sterkte: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Geef mij alsjeblieft de naam of URL van het lied dat je wilt afspelen.',
    PLAY_NO_VC: 'Je bevind zich niet in een geluids kanaal',
    PLAY_OTHER_VC: 'Je bevind zich niet in het zelvde geluids kanaal als ik. Gebruik alsjeblieft mijn geluidskanaal en probeer opnieuw.',
    PLAY_NO_PERMS_SPEAK: 'Ik heb geen rechten om in jouw geluidskanaal te spreken.',
    PLAY_NO_PERMS_CONNECT: 'Ik heb geen rechten om jouw geluids kanaal te betreden.',
    SEARCHING_ERROR: (error) => `Er is een fout opgetreden bij het zoeken.\nFoutmelding: ${error}`,
    SEARCHING_NOT_FOUND: 'Jouw zoekopdracht leverde geen resultaten op.',
    PLAY_WRONGURL: 'De URL die je hebt opgegeven lijkt verkeerd.',
    PLAY_PROCESSING: 'Verwerken...',
    PLAY_QUEUED_PLAYLIST: (size) => `Laade ${size} lieden.`,
    LEAVING_VC: 'Ik zal stoppen met spelen en het geluidskanaal verlaten als er niemand binnen de 15 seconden joined.',
    LEFT_VC: 'Ik ben gestopt met spelen en heb het geluidskanaal verlaten door inactiviteit.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'De support server voor hulp met Bass',
    // IDK
    NONE_VC: 'Je moet je in mijn geluidskanaal bevinden om dat commando te kunnen uitvoeren.',
    NONE_NVC: 'Ik kan jouw geluidskanaal niet betreden!',
    NONE_NOVC: 'Je bevind je niet in een geluids kanaal!',
    NONE_VCFULL: 'Je geluids kanaal is vol!',
    

    // OTHER
    REQUESTED_BY: 'Aangevraagd door',
};
