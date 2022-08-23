import React from 'react'
import TinderCard from 'react-tinder-card'
function TinderCards() {

  // Hooks are functions that can be used in React components.  
  const [footballers,setFootballers] = React.useState([
    {
        name: 'Lionel Messi' ,
        url : 'https://i.insider.com/62ff7086ec781d001868cefb?width=1000&format=jpeg&auto=webp'
    },
    {
      name: 'Sadio Mané' ,
      url : 'https://cdn.vox-cdn.com/thumbor/riICEnBiFLvr7nWOA7D8Bw93NRo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23601662/1241005953.jpg'
  },
  {
    name: 'Kevin De Bruyne' ,
    url : 'https://s.hs-data.com/bilder/spieler/gross/142263.jpg?fallback=png'
},
{
  name: 'Virgil van Dijk' ,
  url : 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSWuHNPzp0HThFfr7maCncIVKW0d2Bq5ge1hUVkjE4OXVWD12MaPcDIrm2ZLPl_Ae7r'
},
{
  name: 'Cristiano Ronaldo' ,
  url : 'https://i.insider.com/62eb9d0e05c1fd001846f99b?width=700'
},
{
  name: 'Robert Lewandowski' ,
  url : 'https://images2.minutemediacdn.com/image/upload/c_crop,w_4321,h_2430,x_481,y_45/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01g9z0dp9e9q71rn0g0h.jpg'
},
{
  name: 'Mohamed Salah' ,
  url : 'https://resources.premierleague.com/photos/2020/06/09/8d0f0037-9c00-4166-866b-5cb135679d37/2020-02-01T165121Z_1905305979_RC2SRE9R3CBK_RTRMADP_3_SOCCER-ENGLAND-LIV-SOU-REPORT.JPG?width=930&height=620'
},
{
  name: 'Neymar' ,
  url : 'https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2022/08/13/Mobile_2223_UK_L1_Paris_Montpellier_Neymar_reindeer_games.jpg?h=728&la=en&w=518&hash=10026BBD764AB5CC6171C00A10320602'
},
{
  name: 'Kylian Mbappé' ,
  url : 'https://s.hs-data.com/bilder/spieler/gross/284095.jpg'
},
{
  name: 'Harry Kane' ,
  url : 'https://s.hs-data.com/bilder/spieler/gross/179293.jpg?fallback=png'
},
{
  name: 'Erling Haaland' ,
  url : 'https://prosoccerwire.usatoday.com/wp-content/uploads/sites/107/2022/08/GTY-1413459132.jpg?w=1000&h=600&crop=1'
},
{
  name: 'Karim Benzema' ,
  url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/1200px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg'
},
{
  name: 'Luka Modrić' ,
  url : 'https://upload.wikimedia.org/wikipedia/commons/e/e9/ISL-HRV_%287%29.jpg'
},
{
  name: 'Riyad Mahrez' ,
  url : 'https://resources.premierleague.com/photos/2022/03/28/9897760f-6fdb-4db7-a718-c089287affe9/Mahrez.jpg?width=930&height=620'
},
{
  name: 'Luis Suárez' ,
  url : 'https://upload.wikimedia.org/wikipedia/commons/7/71/Luis_Su%C3%A1rez_Atl%C3%A9tico_Madrid.jpg'
},
{
  name: 'Jan Oblak' ,
  url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jan_Oblak_2019.jpg/800px-Jan_Oblak_2019.jpg'
},
{
  name: 'Trent Alexander-Arnold' ,
  url : 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg2MzI5NzgwMDY3NTA5OTU1/imago1008884573h.jpg'
},
{
  name: 'Thiago Silva' ,
  url : 'https://cdn.vox-cdn.com/thumbor/w2TzH3P5Bl9dpZsfu0dhZ_XSM2M=/0x0:3000x2000/1200x800/filters:focal(1188x714:1668x1194)/cdn.vox-cdn.com/uploads/chorus_image/image/70540877/1372214610.0.jpg'
},
{
  name: 'Raheem Sterling' ,
  url : 'https://i2-prod.football.london/incoming/article24810351.ece/ALTERNATES/s1200c/0_Chelsea-attacker-Raheem-Sterling.jpg'
},
{
  name: 'NGolo Kanté' ,
  url : 'https://www.si.com/.image/t_share/MTg3MjQ4Nzg1NDk0MTI0NDI5/imago1009361395h.jpg'
},
{
  name: 'Joshua Kimmich' ,
  url : 'https://www.coachesvoice.com/wp-content/uploads/2021/06/KimmichMobile.jpg'
},
{
  name: 'Bruno Fernandes' ,
  url : 'https://resources.premierleague.com/premierleague/photo/2022/08/02/5bf66842-02e5-44be-893e-15e40d39974d/Bruno-Fernandes-Man-Utd.jpg'
},
{
  name: 'Paul Pogba' ,
  url : 'https://versus.uk.com/wp-content/uploads/2022/08/GettyImages-1242062404.jpg'
},
{
  name: 'Antoine Griezmann' ,
  url : 'https://imageio.forbes.com/specials-images/imageserve/6242cfcf2d027b56c5c69298/Atletico-Madrid-do-not-have-an-obligation-to-pay-FC-Barcelona-for-Antoine-Griezmann-/960x0.jpg?format=jpg&width=960'
},
{
  name: 'Andrés Iniesta' ,
  url : 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6d080570cd0b671a/60ddead9c5c41538a15bfd8d/e0b26afc973ef967abe783286f97deda6c0384ef.jpg'
},
{
  name: 'Son Heung-min' ,
  url : 'https://i2-prod.football.london/tottenham-hotspur-fc/news/article23669886.ece/ALTERNATES/s1200c/0_GettyImages-1390539425.jpg'
},
{
  name: 'Sergio Ramos' ,
  url : 'https://icdn.football-espana.net/wp-content/uploads/2022/04/Sergio-Ramos-2.jpeg'
},
{
  name: 'Toni Kroos' ,
  url : 'https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1229235692.jpeg'
},
  ]);


  return (
    <div>
      {
        footballers.map( footballer => (
          <TinderCard
          className='swipe'
          key={footballer.name}
          preventSwipe={['up','down']}
          >
            <div
             style={{ backgroundImage: `url(${footballer.url})` }}
             className='card'>
              <h3> {footballer.name} </h3>
            </div>

          </TinderCard>


      ) )
      }
    </div>
  )
}

export default TinderCards