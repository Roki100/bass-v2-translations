lang = {
    DEFAULT: (key) => `${key} n'a pas ete traduit en français pour l'instant.`,
    DEFAULT_LANGUAGE: 'Langue par défaut',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `${Array.isArray(prefix) ?
        `Les prefixes de ce serveur sont: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        `Le prerix de ce serveur est: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `Mon prefix est désormais \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `Mon prefix est : \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Change mon prefix dans ce serveur/montre mon prefix dans ce serveur',
    PREFIX_LENGTH: '**Le prefix ne peut pas faire plus de 10 caractères !**',
    // SHIT
    COOLDOWN_TITLE: 'Temps d\'attente',
    COOLDOWN: (remaining) => `Vouz devez attendre${remaining} second${remaining === 1 ? '' : 'es'} pour réexécuter cette commande.`,
    COMMAND_DISABLED_SERVER: 'Cette commande à ete désactivée dans ce serveur.',
    COMMAND_DISABLED_GLOBAL: 'Cette commande n\'est pas disponible pour l\'instant.',
    MISSING_BOTPERMS: (missing) => `Il me manque la/les permissions suivantes pour exécuter cette commande : **${missing}**.`,
    NSFW: 'Cette commande ne peut être exécutée que dans un salon NSFW !',
    NO_PERMISSIONS: 'Vous n\'avez pas les permissions requises pour executer cette commande!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Ce serveur n'a pas configuré le/les parametre de serveur suivant : **${settings.join(', ')}** server setting${settings.length !== 1 ? 's' : ''}, donc cette commande ne peut pas etre completée`,
    RUNIN: (types) => `Cette commande n'est disponible que dans les salons de type \`${types}\`!`,
    RUNIN_NONE: (name) => `La commande \`${name}\` n'a pas été configurée pour etre executée dans un salon!.`,
    // EVAL
    EVAL_DESCRIPTION: 'Evalue du code',
    EVAL_ERROR: (time, output, type) => `**Erreur**:${output}\n**Type**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `L'output était trop long... envoi de l'output via un fichier.\n**Type**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `L'output était trop long... envoi de l'output dans la console.\n**Type**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nRoundtrip took: \`Calcul en cours...\`.\nHeartbeat: \`Calcul en cours...\`.\nDatabase: \`Calcul en cours...\`.',
    PONG: (diff, ping, db) => `**Pong!**\nRoundtrip took: \`${diff}ms\`.\nHeartbeat: \`${ping}ms\`.\nDatabase: \`${db}ms\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Invite Bass dans ton serveur',
    BASS_INVITE: 'Invite Bass dans ton sereur!!',
    // INFO
    INFO_DESCRIPTION: 'Informations a propos de Bass',
    // HELP
    HELP_DESCRIPTION: 'Ce message',
    HELP_NO_EXTENDED: 'Pas d\'aide détaillée disponible.',
    HELP_USAGE: (usage) => `Utilisation :: ${usage}`,
    HELP_EXTENDED: 'Aide détaillée ::',
    HELP_BOT_OWNER_ONLY: `Créateur du bot`,
    HELP_MANAGE_GUILD: `Gérer le serveur`,
    HELP_SERVER_OWNER: `créateur du serveur`,
    HELP_SYNTAX: (prefix) => `${prefix}commande - Description *(Required permissions)*\nPourobtenir des informations sur l'utilisation de la commande fais ${prefix}commande\nExemple :: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Commandes`,
    HELP_COMMAND_NOT_FOUND: (command) => `La commande \`${command}\` n'a pas été trouvée.`,
    HELP_TITLE: 'Aide de Bass',
    HELP_LINKS: 'Liens',
    HELP_SUPPORT_SERVER: 'Serveur de support',
    HELP_INVITE: 'Invite',
    // STATS
    STATS_DESCRIPTION: 'Montre les statistiques de Bass',
    CLUSTER: 'Cluster',
    ERROR: 'Erreur',
    SHARDS: 'Shards',
    SERVERS: 'Serveurs',
    USERS: 'Utilisateurs',
    CONNECTIONS: 'Connections',
    PLAYERS: 'Players',
    TOTAL: 'Total',
    CLUSTERS: 'Clusters',
    TOOK: (time) => `Cela a pris ${time}`,
    STATS: 'Statistiques de Bass',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `La langue \`${lang}\` n'a pas été trouvée.\nLangues disponibles: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `La langue est désormais \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**Langue actuelle:** \`${clang}\`\n\nLangues disponibles: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Change/Montre la langue du serveur',
    // TRANSLATORS
    TRANSLATORS_DESCRIPTION: 'Montre les traducteurs ayant aidé a la traduction de Bass',
    // SAY
    SAY_DESCRIPTION: 'Bass dit ce que tu dit',
    // SHARD
    SHARD_DESCRIPTION: 'Montre des informations à propos des shards/clusters',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Ce serveur est sur la shard \`${shard}/${shards}\`, cluster \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Serveur de support de Bass',
    // MUSIC
    NODE_BUSY: 'Désolé, mais l\'audio **semble occupé** dans ce serveur. Merci de patienter quelques secondes puis de réésayer.',
    NODE_NOTHING_PLAYING: '**Aucune musique est jouée dans ce serveur**\nPeut-etre en jouer une??',
    NODE_NOTHING_PLAYED: '**Rien n\'a été joué.**',
    NODE_PROCESSING: 'Le node est en train d\'analyser votre requete...',
    H4DEEP_DESCRIPTION: 'Active le filtre 4deep',
    NODE_4DEEP_ENABLED: '**Filtre activé :** `4deep`.',
    NODE_4DEEP_DISABLED: '**Filtre désactivé** `4deep`.',
    H8D_DESCRIPTION: 'Active le filtre 8D',
    NODE_8D_ENABLED: '**Filtre activé :** `8D`.',
    NODE_8D_DISABLED: '**Filtre désactivér** `8D`.',
    ECHO_DESCRIPTION: 'Active le filtre echo',
    NODE_ECHO_ENABLED: '**Filtre activé :** `Echo`.',
    NODE_ECHO_DISABLED: '**Filtre désactivé** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Active le filtre nightcore',
    NODE_NIGHTCORE_ENABLED: '**Filtre activé :** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Filtre désactivé :** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'Active le filtre vaporwave',
    NODE_VAPORWAVE_ENABLED: '**Filtre activé :** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Filtre désactivé :** `Vaporwave`.',
    BITRATE_DESCRIPTION: 'Change la qualité de la musique',
    NODE_CHANGED_BITRATE: (amount) => `La qualité de la musique est désormais \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Merci de donner une qualité/un bitrate compris entre \`8\` et \`512\` (kbps)',
    CLEAR_DESCRIPTION: 'Efface la queue',
    CLEARED_QUEUE: 'Queue supprimée.',
    LOOP_DESCRIPTION: 'Répete le son/la queue',
    LOOP_SONG: '**Le son va etre répété.**',
    LOOP_QUEUE: '**La queue va etre répétée.**',
    LOOP_ALREADY_SONG: 'Le son est déca "bouclé"!',
    LOOP_ALREADY_QUEUE: 'La queue est déja "bouclée"!',
    LOOP_DISABLED: '**Répétition désactivée.**',
    LOOP_INVALID: (prefix) => `**Merci de me donner un type de boucle** \`(0 - désactivé, 1 - son, 2 - queue)\`\nExemple: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Montre le son en cours',
    NOWPLAYING: 'En train de jouer',
    PAUSE_DESCRIPTION: 'Met le son en pause',
    PAUSED: '**Pause activée.**',
    RESUME_DESCRIPTION: 'Reprend le son',
    RESUMED: '**Le son reprend.**',
    SHUFFLE_DESCRIPTION: 'Mélange la queue',
    SHUFFLE_SHUFFLING: '**Mélange en cours...**',
    SHUFFLE_SHUFFLED: '**Queue mélangée.**',
    QUEUE_DESCRIPTION: 'Montre la queue',
    QUEUE_FETCHING: '**Chargement de la queue...**',
    QUEUE_MORE: (length) => `*.. ${length} sons en plus*`,
    QUEUE_NOWPLAYING: 'Son en cours',
    QUEUE_UPNEXT: 'Prochain(s) sons',
    QUEUE_NOTHING: '**Rien**',
    QUEUE_LENGTH: 'Taille de la queue:',
    QUEUE_FILTERS: 'Filtres:',
    QUEUE_BASS_STRENGTH: '"Force" des basses:',
    QUEUE_LOOP: '**Boucle:**',
    QUEUE_SONG: 'Son:',
    QUEUE_YES: 'oui',
    QUEUE_NO: 'non',
    QUEUE: 'Queue:',
    SKIP_DESCRIPTION: 'Passe au son suivant de la queue',
    SKIPPED: 'Son passé',
    STOP_DESCRIPTION: 'Arrete de jouer, supprimme la queue et quitte le salon vocal',
    STOPPED: 'Fini.',
    PREV_DESCRIPTION: 'Montre les sons récemment joués',
    RECENTLY_PLAYED: 'Récemment joué:',
    VOLUME_DESCRIPTION: 'Change le volume',
    VOLUME_CHANGED: (prev, amount) => `**Le volume à été changé : de \`${prev}%\` à \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**Le volume est déja de \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Merci de donner un volume entre 0 et 200 (%)\nLe volume actuel est: \`${current}%\``,
    BASS_DESCRIPTION: 'Change la "force" des basses',
    GIVE_PROPER_BASS: (current) => `Merci de donner un bombre entre 0 et 60 (dB)\n"Force" des basses actuel: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**"Force" des basses changé : ** \`+${amount}dB\`\nMerci de supporter Bass!`,
    PLAY_DESCRIPTION: 'Jou un son',
    JOINING_VC_ERROR: 'Une erreur est survenue pendant que j\'essayait de rejoindre le salon vocal. Merci de réésayer',
    QUEUED: (url, title) => `[${title}](${url}) ajouté a la queue.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) va maintenant se jouer.`,
    QUEUE_ENDED: 'La queue est finie, j\'ai quitté le salon vocal',
    PLAYING_ERROR: (error) => `Une erreur est survenue quand j'essayais de jouer le son.\nMessage d'erreur: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate/Qualité du son: \`${bitrate}kbps\`, Volume: \`${volume}%\`\nFiltres appliqués: *${filters.join(', ') || '*-*'}*\n"Force" des basses: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Merci de me donner un son (titre ou URL) à jouer.',
    PLAY_NO_VC: 'Vous n\'etes pas dans un salon vocal',
    PLAY_OTHER_VC: 'Vous n\'etes pas dans mon salon vocal. Merci de le rejoindre et de réésayer',
    PLAY_NO_PERMS_SPEAK: 'Je n\'ai pas les permissions pour parler ici',
    PLAY_NO_PERMS_CONNECT: 'JE n\'ai pas les permissions pour rejoindre ce salon',
    SEARCHING_ERROR: (error) => `Une erreur s'est pruduite pendant la recherche.\nMessage d'erreur: ${error}`,
    SEARCHING_NOT_FOUND: 'Aucun résultat trouvé',
    PLAY_WRONGURL: 'L\'URL ne semble pas correcte...',
    PLAY_PROCESSING: 'Chargement en cours...',
    PLAY_BACKEND_ERROR: 'Backend for processing search results/playlists seems to be down or returned an error.\nPlease send this information to our support server at **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `${size} sons chargés.`,
    LEAVING_VC: 'Je vais arreter de jouer et quitter le salon vocal si peronne le le rejoint d\'ici 15 secondes',
    LEFT_VC: 'J\'ai arrété de jouer et j\'ai quitté le samon vocal car personne ne s\'y trouve',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Serveur de support de Bass',
    // IDK
    NONE_VC: 'Vous devez etre dans mon salon vocal pour executer cette commande',
    NONE_NVC: 'Je ne peux pas rejoindre ce salon',
    NONE_NOVC: 'Vous n\'etes connecté a aucun salon!',
    NONE_VCFULL: 'Votre salon vocal est plein',


    // OTHER
    REQUESTED_BY: 'Demandé par',
    OK: 'OK',
    ERROR: 'ERROR'
};
// Lumap#0149
