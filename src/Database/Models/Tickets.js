const { DataTypes, Model } = require('sequelize');

module.exports = class Ticket extends Model {
    static init(sequelize) {
        return super.init({
            ticketId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            authorId: { type: DataTypes.STRING },
            channelId: { type: DataTypes.STRING },
            guildId: { type: DataTypes.STRING },
            resolved: { type: DataTypes.BOOLEAN },
            closeMessageId: { type: DataTypes.STRING }
        }, {
            tableName: 'Tickets',
            timestamps: true,
            sequelize
        });
    }
}