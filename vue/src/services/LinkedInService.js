import axios from "axios";
const http = axios.create ({

     baseURL: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs',
  headers: {
     'X-RapidAPI-Key': 'afc2b7159amsh5d3682f6eb18df7p1b8242jsnbb258946ed23',
     'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
   }

})



export default{
     // getChatbotSuggestions(userCode) {
    // gptMsgRequest = 'for this code, please write some comments, and then send me back the corrected code: ' + userCode
    //     return axios.get(`/${gptMessageRequest}`)
    // }


     getJob(jobType) {
          console.log(jobType);
         let data = {
          SearchQuery: jobType
          }
          //this method was broken 
          return http.get('/Search', { params: data });   
     }

     
     
}