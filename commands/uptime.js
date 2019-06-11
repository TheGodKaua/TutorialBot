const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (client, message, args) => {

    const duration = moment.duration(client.ontime)

    let u = convertMS(client.uptime)
    let ontime = `**${u.h}**` + " Hora(s)" + `**${u.m}**` + " Minutos, " + `**${u.s}**` + " Segundos"

    message.channel.send(`:hammer: | **${message.author.username}**, estou online há: ${ontime}`)

    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        return {
            d: d
            , h: h
            , m: m
            , s: s
        };
    };
}

module.exports.help = {
    nome: "uptime"
}
