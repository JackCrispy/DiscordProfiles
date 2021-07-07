const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');
const Calls = require('../database/monk');

exports.run = async (client, message, args) => {

    let embed = new MessageEmbed()
    .setAuthor('DiscordProfiles | Support', client.user.avatarURL())
    .setDescription('[➡️ **Support Server**](https://discord.gg/YcBzGx26em)')
    .setColor('#fd5392')
    .setTimestamp()

    message.channel.send(embed)
};

exports.help = {
    name: 'support',
    aliases: [],
    description: 'Get an invite link to our Discord Support Server.',
    usage: ''
};