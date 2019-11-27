CREATE TABLE characters (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    fullname TEXT NOT NULL,
    gender TEXT NOT NULL,
    race TEXT NOT NULL,
    class TEXT NOT NULL,

    strength_original INTEGER NOT NULL,
    dexterity_original INTEGER NOT NULL,
    constitution_original INTEGER NOT NULL,
    intelligence_original INTEGER NOT NULL,
    wisdom_original INTEGER NOT NULL,
    charisma_original INTEGER NOT NULL,

    strength_race_bonus INTEGER,
    dexterity_race_bonus INTEGER,
    constitution_race_bonus INTEGER,
    intelligence_race_bonus INTEGER,
    wisdom_race_bonus INTEGER,
    charisma_race_bonus INTEGER,

    strength_total INTEGER NOT NULL,
    dexterity_total INTEGER NOT NULL,
    constitution_total INTEGER NOT NULL,
    intelligence_total INTEGER NOT NULL,
    wisdom_total INTEGER NOT NULL,
    charisma_total INTEGER NOT NULL,

    strength_modifier TEXT NOT NULL,
    dexterity_modifier TEXT NOT NULL,
    constitution_modifier TEXT NOT NULL,
    intelligence_modifier TEXT NOT NULL,
    widsom_modifier TEXT NOT NULL,
    charisma_modifier TEXT NOT NULL,

    bio text,
    date_created TIMESTAMP NOT NULL DEFAULT now()
)