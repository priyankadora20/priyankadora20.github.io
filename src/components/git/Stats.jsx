import React from 'react';
import "./git.css";

const Stats =() =>{
    return(
    <div id='stats'>

    <div id='stats__small'>
        <div className='streak lang_stats'  id="github-streak-stats" >
            <a href="https://github.com/priyankadora20" target="_blank">
                <img className='streak_img statsimg' src="https://github-readme-streak-stats.herokuapp.com?user=priyankadora20&theme=radical&border_radius=4.6&theme=gruvbox_duo" alt="" />
            </a>
            
        </div>





        
        <div className='lang_stats'  id="github-stats-card"  >


            <a href="https://github.com/priyankadora20" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api?username=priyankadora20&show_icons=true&theme=gruvbox_duo" alt="" />
            </a>
                </div>
                
        <div className='lang_stats' id="github-top-langs">
           
            <a href="https://github.com/priyankadora20" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api/top-langs/?username=priyankadora20&
                langs_count=8" alt="" />
            </a>

        </div>
        
    </div>



        </div>
    )
}
export default Stats

/* 
(https://github-readme-streak-stats.herokuapp.com?user=dorapriyanka20&theme=gruvbox_duo)]

<img align="center" src="https://camo.githubusercontent.com/ef4ad9d……732e686…" alt="priyankadora20" data-canonical-src="https://github-readme-streak-stats.herokuapp.com/?user=priyankadora20&" style="max-width: 100%; user-select: auto;">

(https://git.io/streak-stats)
*/