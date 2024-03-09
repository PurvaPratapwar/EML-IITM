import lama from '../../Images/speaker/try3.png'

const SpeakerData = [
    {
        id: 2,
        name: "His Holiness Dalai Lama",
        lectureTitle: "Human Apporach To World Peace",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : `${lama}`,
        youtubeLink: "https://youtu.be/3E4naquW2lQ"
    }, 
    {
        id: 3,
        name: "Dr. APJ Abdul Kalam",
        lectureTitle: "Creativity and Youth Power",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    },
    {
        id: 4,
        name: "A. R. Rahman",
        lectureTitle: "My Story",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img: "data:image/jpeg;base64,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",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    }, 
    {
        id: 5,
        name: "His Holiness Dalai Lama",
        lectureTitle: "Human Apporach To World Peace",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : `${lama}`,
        youtubeLink: "https://youtu.be/3E4naquW2lQ"
    }, 
    {
        id: 6,
        name: "Dr. APJ Abdul Kalam",
        lectureTitle: "Creativity and Youth Power",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    },
    {
        id: 7,
        name: "Mahesh Karhale",
        lectureTitle: "My Story",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img: "data:image/jpeg;base64,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",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    }, 
    {
        id: 8,
        name: "His Holiness Dalai Lama",
        lectureTitle: "Human Apporach To World Peace",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : `${lama}`,
        youtubeLink: "https://youtu.be/3E4naquW2lQ"
    }, 
    {
        id: 9,
        name: "Dr. APJ Abdul Kalam",
        lectureTitle: "Creativity and Youth Power",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    },
    {
        id: 10,
        name: "Mahesh Karhale",
        lectureTitle: "My Story",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img: "data:image/jpeg;base64,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",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    }, 
    {
        id: 11,
        name: "His Holiness Dalai Lama",
        lectureTitle: "Human Apporach To World Peace",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : `${lama}`,
        youtubeLink: "https://youtu.be/3E4naquW2lQ"
    }, 
    {
        id: 12,
        name: "Dr. APJ Abdul Kalam",
        lectureTitle: "Creativity and Youth Power",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    },
    {
        id: 13,
        name: "Dr.Abhijeet Nair",
        lectureTitle: "Abhudyay - build burn and fuck of",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum soluta debitis esse. Repudiandae incidunt at quis esse voluptate qui! Illo laborum provident doloremque soluta inventore.",
        img : "https://www.abhyudayiitm.com/images/teamMembers/AbhijeetRajendranNair.webp",
        youtubeLink: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
    }   

]

export default SpeakerData;
