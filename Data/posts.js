import { storiesData} from '../Data/storiesData'


export const userposts = [ 
    {
        imageUrl : 'https://images.unsplash.com/photo-1610085927744-7217728267a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMGhkJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        user: storiesData[0].userName,
        likes : '7.402',
        caption : 'A mountain is an elevated portion of the Earthscrust generally with steep sides that show ',
        profile_picture:  storiesData[0].image,
        Comments : [
            {
                user : 'lukas',
                comment : ' wow! that was a great ride bro'
            },

            {
                user : 'Theo',
                comment : ' incrideble  bro enjoy the ride',
            },
        ] ,  

    } ,

   
    {
        imageUrl : 'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        user: storiesData[1].userName,
        likes : '4.877',
        caption : 'A mountain is an elevated portion of the Earths crust generally with steep sides that show ',
        profile_picture:  storiesData[1].image,
        Comments : [
            {
                user : 'Cristian',
                comment : ' wow! that was a great ride bro'
            },

            {
                user : 'Martin',
                comment : ' incrideble  bro enjoy the ride',
            },
        ] ,  

    } ,

    {
        imageUrl : 'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        user: storiesData[1].userName,
        likes : 4877,
        caption : 'train ride to Dreem',
        profile_picture:  storiesData[1].image,
        Comments : [
            {
                user : 'Cristian',
                comment : ' wow! that was a great ride bro'
            },

            {
                user : 'Martin',
                comment : ' incrideble  bro enjoy the ride',
            },
        ] ,  

    } ,


]