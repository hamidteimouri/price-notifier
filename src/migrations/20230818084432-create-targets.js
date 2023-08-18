'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('targets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            broker_id: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.STRING
            },
            base: {
                type: Sequelize.STRING
            },
            quote: {
                type: Sequelize.STRING
            },
            target_price: {
                type: Sequelize.STRING
            },
            done: {
                type: Sequelize.BOOLEAN
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('targets');
    }
};