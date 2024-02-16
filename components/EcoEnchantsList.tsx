"use client"
import React from 'react';
import { ReactTabulator } from 'react-tabulator'
import 'react-tabulator/lib/styles.css';
import 'tabulator-tables/dist/css/tabulator.min.css'
import 'tabulator-tables/dist/css/tabulator_bootstrap4.min.css';



const columns = [
    { title: "Enchantment Name", field: "enchantName", width: 150 },
    { title: "Rarity", field: "rarity" },
    { title: "Type", field: "type" },
    { title: "Description", field: "description"},
    { title: "Conflicts", field: "conflicts" }
];

const enchantsList = [
    {
        "enchantName": "Abrasion II",
        "rarity": "Legendary",
        "type": "Sword, Axe",
        "description": "Deals 2 damage to your opponent's armor",
        "conflicts": ""
    },
    {
        "enchantName": "Adrenaline III",
        "rarity": "Epic",
        "type": "Shield",
        "description": "Gain strength for 2.5 seconds when block hits.",
        "conflicts": ""
    },
    {
        "enchantName": "Aqua Harmony",
        "rarity": "Common",
        "type": "Boots",
        "description": "Harness the grace of dolphins while underwater.",
        "conflicts": ""
    },
    {
        "enchantName": "Arcane Defense III",
        "rarity": "Epic",
        "type": "Armor",
        "description": "Gives a 12% chance to ignore potion damage.",
        "conflicts": ""
    },
    {
        "enchantName": "Ascend II",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Levitates you in the air for 0.5 seconds.",
        "conflicts": ""
    },
    {
        "enchantName": "Aura II",
        "rarity": "Special",
        "type": "Chestplate, Leggings",
        "description": "Players within 7 blocks of you take 20% less damage.",
        "conflicts": ""
    },
    {
        "enchantName": "Blackout IV",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Gives a 10% chance to give your opponent darkness for 6 seconds.",
        "conflicts": ""
    },
    {
        "enchantName": "Blast Mining III",
        "rarity": "Special",
        "type": "Pickaxe",
        "description": "15% chance to mine blocks in a 3x3 area.",
        "conflicts": "Veinminer"
    },
    {
        "enchantName": "Bleed VII",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Gives a 10.5% chance to cause your opponent to bleed, damaging them repeatedly.",
        "conflicts": ""
    },
    {
        "enchantName": "Blizzard Skin",
        "rarity": "Holiday",
        "type": "Chestplate",
        "description": "A chance to heal during combat while in cold biomes. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Block Breather III",
        "rarity": "Common",
        "type": "Helmet",
        "description": "45% chance to ignore suffocation damage.",
        "conflicts": ""
    },
    {
        "enchantName": "Boss Hunter IV",
        "rarity": "Rare",
        "type": "Sword",
        "description": "Deal 40% more damage against bosses.",
        "conflicts": ""
    },
    {
        "enchantName": "Brightness V",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Deal 20% more damage to the Warden while in the Deep Dark.",
        "conflicts": "Sharpness, Smite, Bane of Arthropods, Introversion, Slaughter"
    },
    {
        "enchantName": "Carve IV",
        "rarity": "Legendary",
        "type": "Axe",
        "description": "Give 8 damage to entities within 5 blocks when you swing.",
        "conflicts": ""
    },
    {
        "enchantName": "Charge II",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Launches you forwards at 10x speed.",
        "conflicts": ""
    },
    {
        "enchantName": "Cheerful Vigor",
        "rarity": "Holiday",
        "type": "Helmet",
        "description": "Increase damage 1.5x while in cold biomes. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Contagion II",
        "rarity": "Legendary",
        "type": "Trident",
        "description": "Gives a 10% chance to spawn a cloud of poison around where your trident lands.",
        "conflicts": ""
    },
    {
        "enchantName": "Criticals III",
        "rarity": "Epic",
        "type": "Sword, Axe",
        "description": "Increases critical damage by 30%",
        "conflicts": ""
    },
    {
        "enchantName": "Cubism VII",
        "rarity": "T",
        "type": "Sword, Axe, Bow, Crossbow",
        "description": "Deal 35% more against Slimbes and Magma Cubes.",
        "conflicts": ""
    },
    {
        "enchantName": "Curse of Harmlessness",
        "rarity": "Legendary",
        "type": "Sword, Axe",
        "description": "Gives a 15% chance for attacks to do nothing.",
        "conflicts": ""
    },
    {
        "enchantName": "Curse of Hunger",
        "rarity": "Legendary",
        "type": "Helmet",
        "description": "Increases hunger loss by 50%",
        "conflicts": ""
    },
    {
        "enchantName": "Dazzle",
        "rarity": "Rare",
        "type": "Axe",
        "description": "Blinds enemies for 4 seconds when hit. This ability requires gunpowder in your offhand.",
        "conflicts": ""
    },
    {
        "enchantName": "Dynamite II",
        "rarity": "Special",
        "type": "Pickaxe",
        "description": "Mines blocks in a 9x9 area.",
        "conflicts": ""
    },
    {
        "enchantName": "Earthsense III",
        "rarity": "Rare",
        "type": "Pickaxe",
        "description": "While mining, you have a 11.5% chance to reveal nearby precious ores for 6 seconds within a 9 block radius.",
        "conflicts": ""
    },
    {
        "enchantName": "End Affinity II",
        "rarity": "Epic",
        "type": "Sword, Bow, Trident",
        "description": "Increases damage dealt in the End by 40%. ",
        "conflicts": "Nether Affinity"
    },
    {
        "enchantName": "Ender Slayer VI",
        "rarity": "Uncommon",
        "type": "Sword, Axe",
        "description": "Gives a 4% bonus to melee damage against End mobs.",
        "conflicts": ""
    },
    {
        "enchantName": "Escape II",
        "rarity": "Epic",
        "type": "Boots",
        "description": "Gain a short burst of speed 2 after taking damage.",
        "conflicts": "Streamlining"
    },
    {
        "enchantName": "Excavation V",
        "rarity": "Legendary",
        "type": "Shovel",
        "description": "Digs 5 extra blocks",
        "conflicts": ""
    },
    {
        "enchantName": "Feather Step",
        "rarity": "Legendary",
        "type": "Boots",
        "description": "Prevents trampling crops by jumping on them.",
        "conflicts": ""
    },
    {
        "enchantName": "Fenrir's Grace",
        "rarity": "Holiday",
        "type": "Leggings",
        "description": "Increase speed by 1.5x while in colder biomes. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Flashbang VI",
        "rarity": "Rare",
        "type": "Bow, Crossbow",
        "description": "Gives 6% chance of blinding your opponent.",
        "conflicts": ""
    },
    {
        "enchantName": "Foraging IV",
        "rarity": "Common",
        "type": "Shears",
        "description": "Gives a 167% boost to apple drops from leaves.",
        "conflicts": ""
    },
    {
        "enchantName": "Fortitude II",
        "rarity": "Legendary",
        "type": "Armor",
        "description": "Gives a 4% bonus to damage dealt.",
        "conflicts": ""
    },
    {
        "enchantName": "Fortune's Quiver",
        "rarity": "Rare",
        "type": "Bow, Crossbow",
        "description": "Increases maximum common and rare drops by 30%.",
        "conflicts": ""
    },
    {
        "enchantName": "Fox Cunning",
        "rarity": "Holiday",
        "type": "Sword",
        "description": "Invoke a fox's cunning, increasing your attack speed and a 40% chance to summon a pack of wild arctic foxes, giving you increased speed for 3 seconds. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Frost III ",
        "rarity": "Legendary",
        "type": "Bow, Crossbow",
        "description": "Gives a 9% chance to make your opponent feel as if they've been frozen for 5 seconds.",
        "conflicts": ""
    },
    {
        "enchantName": "Getaway II",
        "rarity": "Rare",
        "type": "Boots",
        "description": "Gain a 20% bonus to movement speed below 20 health.",
        "conflicts": ""
    },
    {
        "enchantName": "Goliath VI",
        "rarity": "Rare",
        "type": "Sword",
        "description": "Deal 1.1x more damage for each times your opponent has more health than you, up to 4x.",
        "conflicts": ""
    },
    {
        "enchantName": "Green Thumb",
        "rarity": "Common",
        "type": "Hoe",
        "description": "Gives a 167% boost to drops from crops.",
        "conflicts": ""
    },
    {
        "enchantName": "Harmonize III",
        "rarity": "Rare",
        "type": "Elytra",
        "description": "Gives a 30% boost to experience gained while channeling a magical aura.",
        "conflicts": ""
    },
    {
        "enchantName": "Haunting II",
        "rarity": "Epic",
        "type": "Helmet",
        "description": "Dying spawns a harming cloud for 3 seconds.",
        "conflicts": ""
    },
    {
        "enchantName": "Infernal Touch",
        "rarity": "Legendary",
        "type": "Pickaxe",
        "description": "Automatically smelts mined blocks.",
        "conflicts": "Silk Touch"
    },
    {
        "enchantName": "Introversion V",
        "rarity": "Common",
        "type": "Sword",
        "description": "Gives a 12.5% bonus to melee damage against players.",
        "conflicts": "Sharpness, Smite, Bane of Arthropods, Slaughter, Brightness"
    },
    {
        "enchantName": "Jolly Feet",
        "rarity": "Holiday",
        "type": "Boots",
        "description": "Walk over powdered snow for a short time. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Jumpshot III",
        "rarity": "Uncommon",
        "type": "Bow, Crossbow",
        "description": "Deal 30% more damage in the air.",
        "conflicts": ""
    },
    {
        "enchantName": "Lumberjack VI",
        "rarity": "Rare",
        "type": "Axe",
        "description": "Chop down up to 24 blocks of a tree at once.",
        "conflicts": ""
    },
    {
        "enchantName": "Metabolism II",
        "rarity": "Legendary",
        "type": "Chestplate",
        "description": "Increases the hunger gained by eating food by 25%.",
        "conflicts": ""
    },
    {
        "enchantName": "Nature's Guardian",
        "rarity": "Legendary",
        "type": "Chestplate",
        "description": "Prevents damage taken from elements like lightning, freezing, or burning at the expense of other protective enchants.",
        "conflicts": "Protection, Fire Protection, Projectile Protection, Blast Protection."
    },
    {
        "enchantName": "Nether Affinity II",
        "rarity": "Epic",
        "type": "Sword, Bow, Trident",
        "description": "Increases damage dealt in the Nether by 40%",
        "conflicts": "End Affinity"
    },
    {
        "enchantName": "Nether Prospector",
        "rarity": "Legendary",
        "type": "Pickaxe",
        "description": "Gives a 34% boost to Ancient Debris drops.",
        "conflicts": "Fortune,Silk Touch"
    },
    {
        "enchantName": "Ninja V",
        "rarity": "Rare",
        "type": "Sword",
        "description": "Deal +3 damage while sneaking.",
        "conflicts": ""
    },
    {
        "enchantName": "Poison Ivy II",
        "rarity": "Epic",
        "type": "Leggings",
        "description": "Poisons attackers for 6 seconds for each heart of damage dealt, up to 6 seconds",
        "conflicts": "Thorns"
    },
    {
        "enchantName": "Rebounding III",
        "rarity": "Epic",
        "type": "Shield",
        "description": "Rebounds 50% of incoming damage back at your attacker.",
        "conflicts": ""
    },
    {
        "enchantName": "Replenish",
        "rarity": "Legendary",
        "type": "Hoe",
        "description": "Crops are replanted automatically.",
        "conflicts": ""
    },
    {
        "enchantName": "Rocket Saver III",
        "rarity": "Rare",
        "type": "Elytra",
        "description": "Gives a 30% chance to not consume fireworks when boosting.",
        "conflicts": ""
    },
    {
        "enchantName": "Rod of Plenty",
        "rarity": "Uncommon",
        "type": "Rods",
        "description": "Gives a 100% boost to experience when catching a fish.",
        "conflicts": ""
    },
    {
        "enchantName": "Rumble III",
        "rarity": "Epic",
        "type": "Sword",
        "description": "Gives 9 damage to all entities in a 5 block radius.",
        "conflicts": ""
    },
    {
        "enchantName": "Shadowstrike IV",
        "rarity": "Uncommon",
        "type": "Bow, Crossbow",
        "description": "Deal 40% more damage while sneaking.",
        "conflicts": ""
    },
    {
        "enchantName": "Shadowcloak",
        "rarity": "Epic",
        "type": "Bow, Crossbow",
        "description": "User blends into the shadows, cloaking them while sneaking at the expense of becoming vulnerable to attack.",
        "conflicts": ""
    },
    {
        "enchantName": "Shulker Harvest III",
        "rarity": "Epic",
        "type": "Sword",
        "description": "Gives a 125% boost to Shulker drops.",
        "conflicts": "Looting"
    },
    {
        "enchantName": "Shura II",
        "rarity": "Rare",
        "type": "Bow, Crossbow, Trident",
        "description": "Gives a 1.5x bonus to critical damage when under half health.",
        "conflicts": ""
    },
    {
        "enchantName": "Skull Puncture III",
        "rarity": "Rare",
        "type": "Bow, Crossbow, Trident",
        "description": "Increases headshot damage by 30%",
        "conflicts": ""
    },
    {
        "enchantName": "Slaughter V",
        "rarity": "Common",
        "type": "Sword",
        "description": "Gives a 12.5% bonus to melee damage against passive mobs.",
        "conflicts": "Sharpness, Smite, Bane of Arthropods, Introversion, Brightness"
    },
    {
        "enchantName": "Slipstream III",
        "rarity": "Epic",
        "type": "Trident",
        "description": "Gives an 18% boost to movement speed while holding.",
        "conflicts": ""
    },
    {
        "enchantName": "Snipe IV",
        "rarity": "Epic",
        "type": "Bow, Crossbow",
        "description": "Arrows deal 4% more damage for each 9 blocks travelled.",
        "conflicts": ""
    },
    {
        "enchantName": "Soulbound",
        "rarity": "Very Special",
        "type": "All",
        "description": "Keep this item on death one time.",
        "conflicts": ""
    },
    {
        "enchantName": "Sparks V",
        "rarity": "Rare",
        "type": "Rods",
        "description": "Hooking onto enemies during storms gives a 50% chance to strike lightning, dealing 6 damage.",
        "conflicts": ""
    },
    {
        "enchantName": "Stamina II",
        "rarity": "Rare",
        "type": "Chestplate",
        "description": "Decreases sprinting hunger loss by 60%",
        "conflicts": ""
    },
    {
        "enchantName": "Streamlining IV",
        "rarity": "Special",
        "type": "Boots",
        "description": "Gives a 20% boost to movement speed.",
        "conflicts": ""
    },
    {
        "enchantName": "Stun III",
        "rarity": "Rare",
        "type": "Sword, Bow, Trident, Crossbow",
        "description": "Gives a 10% chance to stun attacked mobs for 1 second.",
        "conflicts": ""
    },
    {
        "enchantName": "Telekinesis",
        "rarity": "Common",
        "type": "Pickaxe, Sword, Axe",
        "description": "Drops and experience go directly into your inventory.",
        "conflicts": ""
    },
    {
        "enchantName": "Thor VI",
        "rarity": "Epic",
        "type": "Bow, Crossbow",
        "description": "Gives a 6% chance to strike 3 lightning bolts on your opponent.",
        "conflicts": ""
    },
    {
        "enchantName": "Thrive II",
        "rarity": "Legendary",
        "type": "Armor",
        "description": "Gives 2 bonus health (cannot be stacked)",
        "conflicts": ""
    },
    {
        "enchantName": "Thundersnipe",
        "rarity": "Epic",
        "type": "Trident",
        "description": "Harness the power of the gods through a trident, hurling yourself as far as you can throw and smiting your foes. Requires a conduit in offhand to work.",
        "conflicts": "Channeling, Stormsurge"
    },
    {
        "enchantName": "Tinker Toy",
        "rarity": "Holiday",
        "type": "Helmet",
        "description": "While in cold biomes, you have a 40% chance to summon a giant Toy Soldier to help defend you. | December 2023 Exclusive",
        "conflicts": ""
    },
    {
        "enchantName": "Tinsel Toes",
        "rarity": "Holiday",
        "type": "Boots",
        "description": "Turns lava in a 3 block radius of the player into obsidian for a short time. | December 2023 Exclusive",
        "conflicts": "Frost Walker,Jolly Feet"
    },
    {
        "enchantName": "Transmission II",
        "rarity": "Legendary",
        "type": "Sword",
        "description": "Teleports you 7 blocks forward.",
        "conflicts": ""
    },
    {
        "enchantName": "Tripleshot",
        "rarity": "Legendary",
        "type": "Bow",
        "description": "Shoot 3 arrows instead of 1.",
        "conflicts": ""
    },
    {
        "enchantName": "Veinminer IV",
        "rarity": "Rare",
        "type": "Pickaxe",
        "description": "Mine up to 14 blocks in veins at once.",
        "conflicts": "Blast Mining"
    },
    {
        "enchantName": "Vitality",
        "rarity": "Special",
        "type": "Sword, Axe, Pickaxe, Shovel",
        "description": "Puts you back on max health.",
        "conflicts": ""
    },
    {
        "enchantName": "Warp Drive",
        "rarity": "Very Special",
        "type": "Bow",
        "description": "Hitting your opponent with an arrow teleports you to them.",
        "conflicts": ""
    },
    {
        "enchantName": "Wisdom III",
        "rarity": "Uncommon",
        "type": "Sword, Axe, Pickaxe, Shovel, Hoe, Bow, Crossbow, Trident",
        "description": "Increases dropped experience by 160%.",
        "conflicts": ""
    },
    {
        "enchantName": "Wound VII",
        "rarity": "Legendary",
        "type": "Bow, Crossbow",
        "description": "Gives a 21% chance to give your opponent 1 damage for 6.75 seconds.",
        "conflicts": "Sharpness"
    },
    {
        "enchantName": "Wyvern II",
        "rarity": "Epic",
        "type": "Elytra",
        "description": "Gives a 20% bonus to melee damage.",
        "conflicts": ""
    },
    {
        "enchantName": "Yultide Fury III",
        "rarity": "Holiday",
        "type": "Bow, Crossbow",
        "description": "Call down the fury of Yultide spirits at the expense of being vulnerable. Must have a conduit in off-hand to channel. | December 2023 Exclusive",
        "conflicts": "Infinity"
    },

]



const EcoEnchantsList = () => {

    return (

        <>
            <ReactTabulator
                className="custom-react-table"
                columns={columns}
                data={enchantsList}
                layout={"fitColumns"}
            />
        </>
    )
}

export default EcoEnchantsList