const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Плеханов",
            "id_2": "Антонов",
            "id_3": "Рыкалов",
            "id_4": "Матюхин",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Кристина",
            "id_2": "Милана",
            "id_3": "Диана",
            "id_4": "Людмила",
            "id_5": "Полина",
            "id_6": "Елизавета",
            "id_7": "Валерия",
            "id_8": "Александра",
            "id_9": "Мария",
            "id_10": "Анна"
        }
    }`,
    midlleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Кириллов",
            "id_7": "Михайлов",
            "id_8": "Данилов",
            "id_9": "Егорьев",
            "id_10": "Андреев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Философ",
            "id_2": "Повар",
            "id_3": "Физик",
            "id_4": "Слесарь",
            "id_5": "Пожарный",
            "id_6": "Инженер",
            "id_7": "Полицейский",
            "id_8": "Спасатель",
            "id_9": "Хирург",
            "id_10": "Пилот"
        }
    }`,
    professionFemaleJson:`{
        "count": 10,
        "list": {     
            "id_1": "Менеджер",
            "id_2": "Стилист",
            "id_3": "Веб-дизайнер",
            "id_4": "Стюардесса",
            "id_5": "Секретарь",
            "id_6": "Косметолог",
            "id_7": "Медсестра",
            "id_8": "Маркетолог",
            "id_9": "Педагог",
            "id_10": "Швея"
        }
    }`,
    GENDER_MALE: 'Мужчина,',
    GENDER_FEMALE: 'Женщина,',

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const object = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(object.count, 1)}`;  
        return object.list[prop];
    },

    randomGender: function(){
        return this.randomIntNumber() == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomSurname: function(gender) {
        return gender == this.GENDER_MALE ? this.randomValue(this.surnameJson) : `${this.randomValue(this.surnameJson)}а`; 
    },

    randomName: function(gender) {
        if(gender == this.GENDER_MALE)
            return `${this.randomValue(this.firstNameMaleJson)} ${this.randomValue(this.midlleNameJson)}ич`;
        else
            return `${this.randomValue(this.firstNameFemaleJson)} ${this.randomValue(this.midlleNameJson)}на`;
    },

    randomProfession: function(gender){
        return gender == this.GENDER_MALE ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson); 
    },

    randomdDate: function(){
        let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
        let days = [31,28,31,30,31,30,30,31,30,31,30,31];

        let year = this.randomIntNumber(1960, 2002);
        days[1] = year % 4 == 0 || year % 100 == 0 && year % 400 == 0 ? 29 : 28;
        let monthIndex = this.randomIntNumber(0, 11);
        let day = this.randomIntNumber(1, days[monthIndex]);
        return `${day} ${months[monthIndex]} ${year} год`;
    },

    getPerson: function(){
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.name = this.randomName();
        this.person.surname = this.randomSurname();
        this.person.birthDay = this.randomdDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};