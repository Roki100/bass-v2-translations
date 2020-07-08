lang = {
    DEFAULT: (key) => `${key} aún no ha sido traducido para es-ES.`,
    DEFAULT_LANGUAGE: 'Idioma predeterminado',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Prefix Puesto${Array.isArray(prefix) ?
        `s en Este server Es: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` En Este Server Esta Puesto Como: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `El Prefix Se a Cambiado A \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `El Prefix Actual Es: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Cambia El Prefix/Enseña El Prefix Actual',
    PREFIX_LENGTH: '**No Puedes Poenr un Prefix de Más De 10 Caracteres**',
    // SHIT
    // Ik just be cool like cooldown
    COOLDOWN_TITLE: 'Espera',
    COOLDOWN: (remaining) => `Tienes Que Esperar ${remaining} segundo${remaining === 1 ? '' : 's'} más.`,
    COMMAND_DISABLED_SERVER: 'Este Comando Esta Desactivado En Este Server.',
    COMMAND_DISABLED_GLOBAL: 'Este Comando No Esta Disponible.',
    MISSING_BOTPERMS: (missing) => `No Tengo los Permisos Necesario Para Completar el Comando, Faltantes: **${missing}**.`,
    NSFW: 'Este Comando Solo Se Puede Usar En Canales NSFW!',
    NO_PERMISSIONS: 'No Tienes Permisos Para Usar Ese Comando!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Este Server No Tiene **${settings.join(', ')}** En la Configuracion Del Server${settings.length !== 1 ? 's' : ''} y por lo tanto este comando no puede completarse.`,
    RUNIN: (types) => `This command is only available in \`${types}\` channels!`,
    RUNIN_NONE: (name) => `Comando \`${name}\` No Esta Configurado Para Que Corra En Algun Canal.`,
    // EVAL
    // Invite: Ya-da-da-da-da-da- It is good day to be not dead!
    EVAL_DESCRIPTION: 'Evalua Codigo',
    EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Tipo**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Tipo**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `Output era demasiado largo... Resultado enviado como archivo.\n**Tipo**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `Output era demasiado largo... Resultado enviado en la consola.\n**Tipo**:${type}\n${time}`,
    // PING
    // pong U ARE DED
    PING: '**Pong!**\nRoundtrip took: \`Calculando...\`.\nHeartbeat: \`Calculando...\`.\nDatabase: \`Calculando...\`.\nREST: \`Calculando...\`.',
    PONG: (diff, ping, db, rest) => `**Pong!**\nRoundtrip Tomo: \`${diff}ms\`.\nHeartbeat: \`${ping}ms\`.\nDatabase: \`${db}ms\`.\nREST: \`${rest}\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    // INVITE: IM DEAD
    // not a reference to Heavy is dead ofc
    INVITE_DESCRIPTION: 'Invita Bass a Tu Server',
    BASS_INVITE: 'Invita Bass A Tu Server!',
    // INFO
    // this is info
    INFO_DESCRIPTION: 'Info De Bass',
    // HELP
    // no help pls
    HELP_DESCRIPTION: 'Este Mensaje',
    HELP_NO_EXTENDED: 'No hay ayuda extendida disponible.',
    HELP_USAGE: (usage) => `Uso :: ${usage}`,
    HELP_EXTENDED: 'Ayuda Extendida ::',
    HELP_BOT_OWNER_ONLY: `Owner Del Bot`,
    HELP_MANAGE_GUILD: `Administrar el servidor`,
    HELP_SERVER_OWNER: `Propietario del servidor`,
    HELP_SYNTAX: (prefix) => `${prefix}Comando - Descripcion *(Permisos Requeridos)*\nPara Obtener Información Sobre El Uso Del Comando Haz ${prefix}Y Va a Decir el uso Correcto\nPor Ejemplo: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Comandos`,
    HELP_COMMAND_NOT_FOUND: (command) => `Comando \`${command}\` no se a encontrado.`,
    HELP_TITLE: 'Ayuda De Bass',
    HELP_LINKS: 'Links',
    HELP_SUPPORT_SERVER: 'Server de Soporte',
    HELP_INVITE: 'Invitar',
    // STATS
    // stop pls
    // i dont want to continue
    STATS_DESCRIPTION: 'Enseña Stats De Bass',
    CLUSTER: 'Cluster',
    ERROR: 'Error',
    SHARDS: 'Shards',
    SERVERS: 'Servers',
    USERS: 'Usuarios',
    CONNECTIONS: 'Conexiones',
    PLAYERS: 'Jugadores',
    TOTAL: 'Total',
    CLUSTERS: 'Clusters',
    //EVENTS_RECIEVED: 'Events recieved',
    //COMMANDS_USED: 'Commands used',
    EVENTS_RECIEVED: 'Eventos',
    COMMANDS_USED: 'Comandos',
    MESSAGES_RECIEVED: 'Mensajes Recividos',
    MESSAGES_SENT: 'Mensajes Enviados',
    TOOK: (time) => `Tomo ${time}`,
    STATS: 'Bass Stats',
    // LANG
    // this is lang, no
    LANG_NOT_FOUND: (lang, langsavailable) => `Lenguaje \`${lang}\` No se a Encontrado.\nLenguajes Disponibles: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `El Lenguaje se a Cambiado a \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**El lenguaje Actual es:** \`${clang}\`\n\nLenguajes Disponibles: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Canbia el lenguaje Del Server/Enseña el Lenguaje Actual',
    // TRANSLATORS
    TRANSLATORS_DESCRIPTION: 'Enseña Los Traductores Que Ayudaron A Traducir el Bot',
    // SAY
    SAY_DESCRIPTION: 'Bass Repite El Mismo Mensaje',
    // SHARD
    // my school call me stupid and retard
    SHARD_DESCRIPTION: 'Enseña Info Sobre Los Shards/Clusters',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Este Server Corre En el Shard \`${shard}/${shards}\` Y Cluster \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Bass Server De Soporte',
    // MUSIC
    // i like music it makes me forget, they said to me
    NODE_BUSY: 'Oops, El Nodo De Audio De Este Servidor **Esta Actualmente Ocupado**, Porfavor espera unos segundos Y Vuelve a Intentar.',
    NODE_NOTHING_PLAYING: '**Nada Esta Sonando En El Server.**\nTal vez pon algo?',
    NODE_NOTHING_PLAYED: '**Nada Estaba Sonando.**',
    NODE_PROCESSING: 'El Nodo De Audio Esta Procesando tu Solicitud...',
    H4DEEP_DESCRIPTION: 'Activa el filtro de audio 4deep', 
    //bruh i like this filter
    NODE_4DEEP_ENABLED: '**Filtro Habilitado** `4deep`.',
    NODE_4DEEP_DISABLED: '**Filtro desactivado** `4deep`.',
    H8D_DESCRIPTION: 'Activa el filtro de audio 8D',
    NODE_8D_ENABLED: '**Filtro Habilitado** `8D`.',
    NODE_8D_DISABLED: '**Filtro desactivado** `8D`.',
    ECHO_DESCRIPTION: 'Activa el filtro de audio de eco',
    NODE_ECHO_ENABLED: '**Filtro Habilitado** `Echo`.',
    NODE_ECHO_DISABLED: '**Filtro desactivado** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Activa El Filtro Nightcore',
    NODE_NIGHTCORE_ENABLED: '**Filtro Habilitado** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Filtro desactivado** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'TActiva el filtro de audio vaporwave',
    NODE_VAPORWAVE_ENABLED: '**Filtro Habilitado** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Filtro desactivado** `Vaporwave`.',
    CHORUS_DESCRIPTION: 'Activa el Filtro De Coro', //some time my brain says why a Chorus Filter
    NODE_CHORUS_ENABLED: '**Filtro Habilitado** `Chorus`.',
    NODE_CHORUS_DISABLED: '**Filtro desactivado** `Chorus`.',
    KARAOKE_DESCRIPTION: 'Activa el Filtro De Karaoke',
    NODE_KARAOKE_ENABLED: '**Filtro Habilitado** `Karaoke`.',
    NODE_KARAOKE_DISABLED: '**Filtro desactivado** `Karaoke`.',
    PULSATOR_DESCRIPTION: 'Activa El Filtro De Audio Pulsator',
    NODE_PULSATOR_ENABLED: '**Filtro Habilitado** `Pulsator`.',
    NODE_PULSATOR_DISABLED: '**Filtro desactivado** `Pulsator`.',
    TREMOLO_DESCRIPTION: 'Activa el Filtro De Audio Tremolo',
    NODE_TREMOLO_ENABLED: '**Filtro Habilitado** `Tremolo`.',
    NODE_TREMOLO_DISABLED: '**Filtro desactivado** `Tremolo`.',
    HSURROUND_DESCRIPTION: 'Activa El Filtro De Audio Surround',
    NODE_SURROUND_ENABLED: '**Filtro Habilitado** `Surround`.',
    NODE_SURROUND_DISABLED: '**Filtro desactivador** `Surround`.',
    BITRATE_DESCRIPTION: 'Cambia El Bitrate/Calidad',
    NODE_CHANGED_BITRATE: (amount) => `El Bitrate se A Cambiado A \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Porfavor pon Un Bitrate Entre \`8\` A \`512\` (kbps)',
    CLEAR_DESCRIPTION: 'Borra La Cola',
    CLEARED_QUEUE: 'La Cola A Sido Borrada.',
    LOOP_DESCRIPTION: 'Pone En Bucle la Cancion/Sonido',
    LOOP_SONG: '**Bucle Activado.**',
    LOOP_QUEUE: '**Bucle De Cola Activado.**',
    LOOP_ALREADY_SONG: 'Esta Cancion Ya Esta En Bucle!',
    LOOP_ALREADY_QUEUE: 'La Cola Ya Esta En Bucle!',
    LOOP_DISABLED: '**Bucle Desactivado.**',
    LOOP_INVALID: (prefix) => `**Por favor, dar un tipo de bucle adecuado \`(0 - Desactivar, 1 - Cancion, 2 - Cola)\`\nPor Ejemplo: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Enseña La Cancion Sonando',
    NOWPLAYING: 'Ahora Sonando',
    PAUSE_DESCRIPTION: 'Pausa La Cancion',
    PAUSED: '**Pausado.**',
    RESUME_DESCRIPTION: 'Reanudar la canción',
    RESUMED: '**Reanudado.**',
    SHUFFLE_DESCRIPTION: 'Mezcla La Cola',
    SHUFFLE_SHUFFLING: '**Mezclando la Cola...**',
    SHUFFLE_SHUFFLED: '**Cola Mezclada.**',
    QUEUE_DESCRIPTION: 'Muestra la cola de canciones actual',
    QUEUE_FETCHING: '**Buscando Cola...**',
    QUEUE_MORE: (length) => `*.. Y ${length} más*`,
    QUEUE_NOWPLAYING: 'Ahora Sonando',
    QUEUE_UPNEXT: 'Despues',
    QUEUE_NOTHING: '**Nada**',
    QUEUE_LENGTH: 'Longitud de la cola:',
    QUEUE_FILTERS: 'Filtros:',
    QUEUE_BASS_STRENGTH: 'Fuerza Del Bass:',
    QUEUE_LOOP: '**Bucle:**',
    QUEUE_SONG: 'Sonido:',
    QUEUE_YES: 'si',
    QUEUE_NO: 'no',
    QUEUE: 'Cola:',
    SKIP_DESCRIPTION: 'Salta La Cancion Sonando',
    SKIPPED: 'Saltada',
    STOP_DESCRIPTION: 'Detiene La Cola, Borra La Cola y Sale Del Canal',
    STOPPED: 'Detenido.',
    PREV_DESCRIPTION: 'Enseña Cancion Recientemente Puesta',
    RECENTLY_PLAYED: 'Recientemente Reproduccido:',
    VOLUME_DESCRIPTION: 'Cambia El Volumen',
    VOLUME_CHANGED: (prev, amount) => `**El Volumen a Cambiado de \`${prev}%\` A \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**El Volumen ya esta A \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Por favor, Pon un Numero de 0 a 500 (%)\nVolumen Actual Es: \`${current}%\``,
    BASS_DESCRIPTION: 'Cambia La Fuerza del Bass Boost',
    GIVE_PROPER_BASS: (current) => `Por favor, Pon Un Numero de 0 a 60 (dB)\nBass Boost Actual Es: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Se a Cambiado La Fuerza Del Bass Boost A** \`+${amount}dB\`\nGracias por apoyar a Bass!`,
    PLAY_DESCRIPTION: 'Reproduce Una Cancion',
    JOINING_VC_ERROR: 'Un error desconocido al intentar unirse a su canal de voz.\Por Favor Intenta Otra Vez.',
    QUEUED: (url, title) => `Añadido [${title}](${url}) A La Cola.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) Va a Sonar.`,
    QUEUE_ENDED: 'Cola Terminada, Acabo de Salir De Canal De Voz.',
    PLAYING_ERROR: (error) => `Error ocurrido al intentar Reproduccir.\nMensaje Del Error: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate: \`${bitrate}kbps\`, Volumen: \`${volume}%\`\nFiltros Puestos: *${filters.join(', ') || '*-*'}*\nFuerza Del Bass Boost: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Por favor, Dame Un nombre o URL de la canción que desea reproducir.',
    PLAY_NO_VC: 'No Estas En Un Canal De Voz.',
    PLAY_OTHER_VC: 'No estás en el mismo canal de voz que yo. Por favor únete a mi canal de voz e inténtalo de nuevo.',
    PLAY_NO_PERMS_SPEAK: 'No tengo permisos para hablar en tu canal de voz.',
    PLAY_NO_PERMS_CONNECT: 'No tengo permisos para unirme a tu canal de voz.',
    SEARCHING_ERROR: (error) => `Error ocurrido durante la búsqueda.\nMensaje Del Error: \`${error}\``,
    SEARCHING_NOT_FOUND: 'No se han encontrado resultados para su búsqueda.',
    PLAY_WRONGURL: 'URL que proporcionaste parece estar Equivocada.',
    PLAY_PROCESSING: 'Procesando...',
    PLAY_BACKEND_ERROR: 'Backend para el procesamiento de resultados de búsqueda/ listas de reproducción parece estar caido o a devuelto un error.\nPor favor envíe esta información a nuestro servidor de soporte en **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `Cargado ${size} Canciones.`,
    LEAVING_VC: 'Voy a Parar De Reproduccir y salir del canal de voz en 15 segundos si nadie se unirá.',
    LEFT_VC: 'He dejado de Reproduccir y dejé el canal de voz debido a la inactividad.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Servidor de soporte para ayuda con Bass',
    // TTS
    TTS_DESCRIPTION: 'Envía texto a voz en archivo',
    TTS_WRONG_LANG: (langs, prefix) => `**Por favor Pon un Lenguaje Soportado!**\nLenguajes Soportados: \`${langs.join(', ')}\`\nEjemplo De Uso: \`${prefix}tts Hola | es\``,
    TTS_ERROR: 'Error ocurrido al obtener el archivo.',
    TTS_WRONG_TXT_LENGTH: 'La longitud del texto deberá ser superior a 0 caracteres y no exceder de 200 caracteres.',
    TTS_NO_ARGS: (prefix, langs) => `**Por favor, dar texto y lenguaje para generar tts.**\nEjemplo De Uso: \`${prefix}tts Hola | es\`\nLenguajes Soportados: \`${langs.join(', ')}\``,
    // IDK
    // same idk
    NONE_VC: 'Tienes que estar en mi canal de voz para usar ese comando.',
    NONE_NVC: 'No puedo unirme a tu canal de voz!',
    NONE_NOVC: '¡No estás en el canal de voz!',
    NONE_VCFULL: '¡Tu canal de voz está lleno!',


    // OTHER
    REQUESTED_BY: 'Solicitado Por',
    OK: 'OK',
    ERROR: 'ERROR'
    // yes this is bird
    // FlameBird#9020
};
