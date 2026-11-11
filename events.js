function loadEvents() {
    // mm,dd,yyyy,start,end,type,title,[description,dj,Tidal,Spotify,YouTube,YoutubeMusic,AppleMusic]
    // Only the Spotify and Apple Music columns are shown on the site now. Leave unused columns empty (keep the commas).
    // DO NOT USE @, (, ), /, or other symbols!!!
    const eventmatrix = `
    11,06,2026,17:00,21:00,dj,Army vs Air Force Boxing,WKDT provided walk-out music for Army vs Air Force Boxing,,,2bRg46YGatln5PDnLRnC6I,,,playlist/army-air-force-walk-out-songs/pl.u-DdANr1PC0P8WaYk
    01,30,2026,17:00,22:30,dj,Infantry Ball,No Description,Ethan,9076e1f1-493b-411b-942c-abe18cf88fa4,1GCyvdYupZj1Jk9P7UmX85,videoseries?si=RNDdXqjsG7YBLjTY&amp;list=PLOh6mlSStDuQlGD6-VgKQVmslKhEJ4yGW,videoseries?si=ETiwyPerPkzFiXSp&amp;list=PLOh6mlSStDuR8YYlbEqNxKWgrwmnre9MO
    12,13,2025,12:00,16:00,fb,Army vs Navy
    12,13,2025,09:00,11:30,dj,Army vs Navy Corps Tailgate
    11,29,2025,12:00,16:00,fb,UTSA vs USMA
    11,22,2025,12:00,16:00,fb,Tulsa vs USMA
    11,08,2025,12:00,16:00,fb,Tulane vs USMA
    11,08,2025,09:00,11:30,dj,Black Knight Alley Tailgate,No Description,WalBanMun,9e19ef94-da2f-45dc-aaa6-49df17095e3c,4SiSoqvy5cdjlg5775W8a5?utm_source=generator,videoseries?si=fuTYRnKGL6QAY7mR&amp;list=PLOh6mlSStDuRI6WAASOAXp7AkvYdhcJoK,videoseries?si=ofPIJlY61bmb5RiM&amp;list=PLOh6mlSStDuSbUxmBgulIXHaM0FH18X3D
    11,06,2025,16:30,18:30,pa,Drill Support
    11,05,2025,16:30,18:30,pa,Drill Support
    11,04,2025,16:00,19:00,dj,Brigade Athletics Finals,No Description,BanLor,9e0b2669-e561-4f91-bc73-dac86364cc6c,4SiSoqvy5cdjlg5775W8a5?utm_source=generator,videoseries?si=-LFWycOKutAUg6YA&amp;list=PLOh6mlSStDuQe6cY3d5EQEjBo9uSWFjTV,videoseries?si=fO1SlbpFmzEQkgz5&amp;list=PLOh6mlSStDuS9sZGfwnNBb_7j_DWVKU7R
    11,03,2025,16:30,18:30,pa,Drill Support
    11,01,2025,12:00,16:00,fb,Air Force vs USMA
    10,30,2025,19:30,22:30,dj,1BN 1REG Fall Festival
    10,29,2025,16:30,18:30,pa,Drill Support
    10,28,2025,16:30,18:30,pa,Drill Support
    10,25,2025,15:30,21:00,dj,3BN Dynastyfest,No Description,VasSwiCar,97ed312e-72e8-4578-9f44-bcaacd50ceea,playlist/6zfuwpf1CHcKPOEStaM0M2?utm_source=generator,videoseries?si=lbaWrSLGI6h94msA&amp;list=PLOh6mlSStDuRwjs5WbhQpxiOIV82FqkkJ,videoseries?si=OfwCmqPlfTzXz8yI&amp;list=PLOh6mlSStDuQlsyM2Mv1wttriIPACG_no
    10,24,2025,18:00,20:00,dj,2REG Strikefest,No Description,Dic,af3e0bbd-5fbe-4a4d-b608-79e1d2b0ab49,3VIcNYinmhh5N9zPG6jLE5?utm_source=generator,videoseries?si=8_4vsa3-MjrezbLF&amp;list=PLOh6mlSStDuTTrmYHW5ByatflihXBlIRp,videoseries?si=eBKDvssjX95dd2-V&amp;list=PLOh6mlSStDuQvS2xUvJOlBDYU2Qch64PE
    10,24,2025,16:30,18:30,dj,1REG BBQ,No Description,BanJonSwi,60e8eb4f-4667-4cf7-9d85-0fe411c82050,5KE7003X92ZBOD3YkMB087,videoseries?si=fedhxpBQKankDQFm&amp;list=PLOh6mlSStDuQjOk2kyxYqWrBfBTmWn1jH,videoseries?si=AUYGR3UFFGjpIrXj&amp;list=PLOh6mlSStDuSmwbcLvoLi2reLiNA-uPWm
    10,21,2025,16:30,18:30,pa,Drill Support
    10,20,2025,16:30,18:30,pa,Drill Support
    10,18,2025,18:00,23:00,dj,New York Military Forces Dining Out,No Description,spiritducorp,044c0fda-d076-46b8-83f7-3eac28371a4d,58hBCginnXn1YZOJiwpKPC,videoseries?si=7qMwg-WOQvC84RQy&amp;list=PLOh6mlSStDuRVz_lb0ZGCOpzM6pIbcLo5,videoseries?si=1-x18QRQkTXBhITI&amp;list=PLOh6mlSStDuSyPYxJQAxGi7B5fzJuYNZv
    10,18,2025,18:00,22:00,fb,Tulane vs USMA
    10,17,2025,16:30,18:30,dj,AOG Connect,No Description,BanzWalk,45da7f2d-4bde-4859-aefa-28971026920e,5gQmOMK4olFuRM4LVBTnGn,videoseries?si=sqRYCrJamkbt_kFo&amp;list=PLOh6mlSStDuR0AwInMD5MPRSLMe6UUiDk,videoseries?si=PZBECOF9JfhNOygJ&amp;list=PLOh6mlSStDuRkXwt5Iuka-EYN3EZdeSHY
    10,11,2025,09:00,11:30,dj,Black Knight Alley Tailgate,No Description,BanzWalk,01568bc2-7262-459e-ba8b-ba0475b51a73,2Gy958DlSr8ImlumrNGbCQ,videoseries?si=vofOHbdMOExuvhdP&amp;list=PLOh6mlSStDuTdm633nA90_3T40hw_U0wS,videoseries?si=EvuF8Dq4rgVKIIF4&amp;list=PLOh6mlSStDuS0udBLI28jfwT4Up8V3VZu
    10,11,2025,12:00,15:30,fb,Charlotte vs USMA
    10,09,2025,16:30,18:30,pa,Drill Support
    10,07,2025,16:30,18:30,pa,Drill Support
    10,04,2025,18:00,22:30,fb,UAB vs USMA
    09,28,2025,03:00,18:00,pa,Tunnel To Towers Memorial Run
    09,25,2025,18:00,21:30,fb,ECU vs USMA
    09,20,2025,15:30,18:00,dj,Texas Tamale Tailgate 30th Anniversary,No Description,Manny,d3a47d03-ae8d-408e-824f-3225f583ae0d,1UDTc42ZyU0xKUnbQfELdw,videoseries?si=3D2beHb3SCIHgGlN&amp;list=PLOh6mlSStDuSbNeLelx7JAY06Hwzcw6EM,videoseries?si=jKql_jYcQjmuJPrU&amp;list=PLOh6mlSStDuShCofTGC83I3wIG7Sr1Lyr
    09,20,2025,12:00,15:30,fb,North Texas vs USMA
    09,17,2025,16:30,18:30,pa,Drill Support
    09,15,2025,16:30,18:30,pa,Drill Support
    09,06,2025,19:00,22:30,fb,Kansas State vs USMA
    08,29,2025,18:00,21:30,fb,Tarleton State vs USMA
    08,28,2025,15:30,17:00,dj,USMA Branch Week CAPEX
    08,27,2025,14:00,16:00,dj,USMA Branch Week CAPEX (Rehearsal)
    08,27,2025,16:30,18:30,pa,Drill Support
    08,26,2025,16:30,18:30,pa,Drill Support
    08,25,2025,15:30,19:45,dj,USMA 2025 Branch Week Welcome Dinner,No Description,Falcon,dc31e968-6dbb-43c9-aea2-4f771ffa316d,1z7DFuhZW9ZJpHqNW3G7sY,videoseries?si=5wa5gIQ-4E6cxJtp&amp;list=PLOh6mlSStDuQvG-mhc6jJCacq8Hc7z5QT,videoseries?si=bwFAaVQaLNcUmszZ&amp;list=PLOh6mlSStDuTECrsxBp4XQNfjIUeUPKD3
    08,25,2025,16:30,18:30,pa,Drill Support
    08,19,2025,19:00,22:00,dj,Club Night,No Description,Coop and Stimp,5d315240-05a4-4959-94e4-0958ede545f1,0vS7UnrN2SNP1YSKTRQ8xr,videoseries?si=1qXWbBUCHVKVtVem&amp;list=PLOh6mlSStDuSU-XlVwHOF126BtxphfBYz,videoseries?si=2fG47b332RsFqE_O&amp;list=PLOh6mlSStDuTBscV4XUxGm4jiB4cv7gA9
    08,19,2025,16:30,18:30,pa,Drill Support
    08,18,2025,16:30,18:30,pa,Drill Support
    08,17,2025,06:30,14:00,dj,West Point Triathalon (Adult triathalon),No Description,Edox,f67ad2fc-9c00-4375-a007-c229f41f00e8,4jqc9eajBEqNndgPsQ08tS,videoseries?si=ZxAN6BkodSZ3oCcz&amp;list=PLOh6mlSStDuTdqB6bYU7-A8lzv_iVMRmK,videoseries?si=T6CJ4isdJTH5LYk4&amp;list=PLOh6mlSStDuRkM1Q3KFv3DuAWRkbe2xzO
    08,16,2025,11:00,15:00,dj,West Point Triathalon (Kids triathlon),No Description,Vase,8b1adabf-9ee4-4901-9c90-a096bfa6fc20,3CYrqM6ISTzr1lWh0qv8Cy,videoseries?si=TFY2g-a2000mIsVB&amp;list=PLOh6mlSStDuQLUnkBQST8n7vZtyG7VzNR,videoseries?si=UxcMOb2GVO5-YvtZ&amp;list=PLOh6mlSStDuSJsB9sLU6kTOdOB4zu7dLH
    08,15,2025,16:30,18:30,pa,Drill Support
    08,15,2025,07:30,09:30,pa,Drill Support
    08,15,2025,05:35,06:45,dj,1CPT Run,No Description,Coop,ba0dfc13-22cd-40dc-b474-a904dbe68695,5khv1gfRmco6IusWwBNYxW,videoseries?si=0P9E_PQSl5YkZwNM&amp;list=PLOh6mlSStDuTwdpJMG-e4jEKY5bElRLmb,videoseries?si=LxR9cMdJ289qNube&amp;list=PLOh6mlSStDuRarUZ2GjomRAy4ImxznoJZ
    08,13,2025,07:30,09:30,pa,Drill Support
    08,12,2025,07:30,09:30,pa,Drill Support
    05,08,2025,16:30,18:30,pa,Drill Support
    05,07,2025,16:30,18:30,pa,Drill Support
    05,06,2025,16:30,19:30,dj,Brigade Company Athletics Finals,No Description,Falcon,d33d35cd-99e3-4dd4-96ad-4c0f216d605e,5SVu1Wm4Z4Ev6tAFuMcNJc,videoseries?si=m377tCX1xKWR1u0a&amp;list=PLOh6mlSStDuSrF3D8jFdmA9UPDVtVEelJ,videoseries?si=cULzYmBXsJkxJrJN&amp;list=PLOh6mlSStDuRgano9w_fQQtUiK-JXXjvG
    05,03,2025,08:00,13:00,dj,Sandhurst Crucible,No Description,Vase,bbb82722-67d2-4f48-9ffc-c4a67ea0458c,2aHIw1ulk3u60QFKCT9Dez,videoseries?si=l6fOgwFhxwyxJ_x6&amp;list=PLOh6mlSStDuTyq9Y3Y9xnuzEiNcZImu3t,videoseries?si=5tsyUqZFJUcsvcN4&amp;list=PLOh6mlSStDuTFQjGnHM0XEq-ZAj_CPOcR
    05,02,2025,17:15,20:00,dj,4th Reg Fiesta,No Description,Coop and Stimp,2d086156-1da9-47df-932b-755d8e67cba1,6pvO0q4aXJb556xO6HFntt,videoseries?si=HiO9DHr1cTv7c9AU&amp;list=PLOh6mlSStDuQQ75P5aWdUc07J0tw-XP7r,videoseries?si=pLLwKkRwknGz-DgS&amp;list=PLOh6mlSStDuTTeEM8suWs9ohNjhBYMUqk
    05,02,2025,14:00,16:45,dj,Sandhurst Ruck Stepoff,No Description,Coop,33aaf0b1-37c7-4b96-8c48-6df79ddfc25e,1ty2xwmvSIx0tJXlGy5GaI,videoseries?si=TDViOtT98LKTXY3s&amp;list=PLOh6mlSStDuQa-uHSxEPNWPvZ7Zy88Igy,videoseries?si=4PnVefGzndeaflyz&amp;list=PLOh6mlSStDuRRdlmwAYnG2gIZr6jgCp53
    04,28,2025,14:30,19:00,dj,Sandhurst OOM Relay,No Description,Lock,e611ea65-6688-4bd8-ae0f-f61c5a726e87,0VL6XHJMscxbrMvDLVXhpZ,videoseries?si=alCc6qsz1LyfQgrk&amp;list=PLOh6mlSStDuQIqX67c0Gvc3jqzVwb_CUj,videoseries?si=xrXIIC6JN1lIvvKo&amp;list=PLOh6mlSStDuSKVQ9VW8R4XKQGlVSnTlbi
    04,27,2025,06:00,14:00,dj,Special Olympics,No Description,Vase,a0d36cb2-ffbf-4261-9c17-aaecbfe2c67d,4Wt1AMuzxhugWKnmQ7St3M,videoseries?si=eUUA4RaMa3PRyXkx&amp;list=PLOh6mlSStDuTkmb8D0iTM8nnL9TBVmQvu,videoseries?si=ePFbxpQUU3qJQYy1&amp;list=PLOh6mlSStDuRzITLmBG-xZdmXHSthnWtF
    04,25,2025,18:30,21:00,dj,2REG Strikefest,No Description,Demize
    04,25,2025,16:30,20:00,dj,1REG ACT BBQ,No Description,Coop,31e9bd3c-1bb4-4a04-87d0-d4a34f0a4da3,5oXrhCSiri7spoZLyKA52O,videoseries?si=HT9ja5c7quorn3vP&amp;list=PLOh6mlSStDuTkT5lQ9FEus8S9-DVjvE_H,videoseries?si=NGS7x0kGh114tqQj&amp;list=PLOh6mlSStDuRO43AK7AhBARJti5OW3GJR
    04,23,2025,16:30,18:30,pa,Drill Support
    04,17,2025,16:30,18:30,pa,Drill Support
    04,15,2025,16:30,18:30,pa,Drill Support
    04,12,2025,08:00,10:00,pa,Scoutmasters' Council Camporee 2
    04,11,2025,18:00,21:00,pa,Scoutmasters' Council Camporee 1
    04,12,2025,10:00,14:00,dj,ASCE Symposium Day 2
    04,11,2025,08:30,13:30,dj,ASCE Symposium Day 1
    04,04,2025,16:00,21:00,dj,4th Reg Home Run Derby
    03,28,2025,15:45,19:30,dj,C-1 Celtic Warrior Games
    03,09,2025,06:45,12:30,dj,Fallen Comrades Half Marathon
    03,08,2025,20:45,22:30,dj,McDonald Conference for Leaders of Character (MCLC) Social
    03,07,2025,20:15,23:00,dj,McDonald Conference for Leaders of Character (MCLC) Trivia Night
    03,07,2025,15:00,23:00,dj,USFAA St. Barbara's Day Ball
    03,07,2025,16:45,19:30,dj,1st Annual Brigadewide C-1 Saint Patrick's Day Celebration and Fundraiser
    02,28,2025,18:00,23:30,dj,Infantry Ball
    02,21,2025,16:30,21:30,dj,Brigade Boxing Open,WKDT provided walkout music and hype music between rounds for the Brigade Boxing Open,Demize,945885e7-ab3b-463a-b95c-8e569ecba368,6Yj5agJJGtRwitHEzhOpBi,videoseries?si=TuEbOphGmtuwQ_bb&amp;list=PLOh6mlSStDuTt6PWaUpZJzmzDW0kPAclj,videoseries?si=qhIj9U4AyYYTTtaK&amp;list=PLOh6mlSStDuSd0Ah1OtaMGgKI7hwtO7a4
    01,31,2025,17:00,02:00,dj,Norwegian Foot March,WKDT provided DJ support for the step-off and finish of the Norwegian Foot March,Coop,b124ade3-6216-47a2-9d72-c4bdb5d83cec,6j9Qr6TXPO4oLKqycUPgQC,videoseries?si=bfAPTr7wiFY48pt6&amp;list=PLOh6mlSStDuQdHSiuWcAclFTSZANa0dvH,videoseries?si=6jCsjGcwoGU8ld5j&amp;list=PLOh6mlSStDuRALJ6RP77uGv5QPigilgwF
    12,25,2024,12:00,12:00,pa,Merry Christmas!
    12,14,2024,15:00,19:00,fb,ARMY vs NAVY
    12,12,2024,16:30,19:00,dj,Goat-Engineer Game,WKDT provided DJ support for the Goat/Engineer Game,Edox,f46b5452-a085-4491-a564-c7aca406589c,3ClRHsjxR3fJEyIwpN4nAf,videoseries?si=13-L-vXnKIM1pn17&amp;list=PLOh6mlSStDuTibDhz3sLF23Elwf100oJb,videoseries?si=s-nvEbi-JYcwKL4J&amp;list=PLOh6mlSStDuSp7YPlEW84WWRX50-5GoeO
    12,06,2024,20:00,23:00,fb,Tulane vs USMA,Broadcast live coverage of Army football
    12,04,2024,20:00,22:00,dj,Branch Night 2,WKDT provided DJ support for Branch Night,Demize,69f6c7c7-7e35-4f82-a407-ba0733de9218,2tLMzmvhDiN7vulipavyUW,videoseries?si=vu74IfpLkdGauaOt&amp;list=PLOh6mlSStDuTGrPeTpGaz3A9KODENlKjJ,videoseries?si=LOfNRe_upcvq4qJz&amp;list=PLOh6mlSStDuTCywOAnHQBhKrKGqbtAT44
    12,04,2024,18:00,20:00,dj,Branch Night 1,WKDT provided DJ support for Branch Night,Blue Hildreth,acd6bbf9-eccd-49ee-acce-bb54c2fdd265,13b9DH9Id1Qy9C7Nub0kvW,videoseries?si=_3wwdA0u1jMwdiNf&amp;list=PLOh6mlSStDuR8oqHuiQq-zk7_L_wenqt7,videoseries?si=b7LKuwVKwe_8PAQS&amp;list=PLOh6mlSStDuRWY94PlwHpDYsswbga2Z5e
    11,30,2024,12:00,16:00,fb,UTSA vs USMA
    11,28,2024,12:00,12:00,pa,Happy Thanksgiving!
    11,23,2024,12:00,16:00,fb,Notre Dame vs USMA,No coverage due to Yankee Stadium
    11,09,2024,12:00,16:00,fb,USMA vs North Texas,Broadcast live coverage of Army football
    11,05,2024,16:20,19:30,dj,Company Athletics Brigade Finals,WKDT provided audio system and DJ support for Company Athletics Brigade Finals
    11,02,2024,12:00,16:00,dj,Texas Tamale Tailgate,WKDT provided DJ support for West Point Parents' Club of Houston Tailgate,Demize,7f1d97ed-fad0-47b8-8d84-1781e6d3e374,68McwWRWvwZ5lWrz5x1L97,videoseries?si=w2BdHKteVcOAmGgQ&amp;list=PLOh6mlSStDuTnux_naBM_ft5WFVRREr86,videoseries?si=8F_QOYXpZc3pbhit&amp;list=PLOh6mlSStDuRXSG7U-ij_ZdIro2N-8N7M
    11,02,2024,12:00,16:00,fb,USAFA vs USMA,Broadcast live coverage of Army football
    11,01,2024,17:50,20:00,dj,1st Reg Halloween,WKDT provided DJ support for 1st Reg Halloween BBQ,Edox,5450aff9-93ab-47b8-afec-9081ff960d91,7cfrWd1sUhXPp4Pow24UMf,videoseries?si=ftZ1C6B3N-DWZo0c&amp;list=PLOh6mlSStDuRYuPg2DbPBhoLqJj7Yz9pW,videoseries?si=aYm6Y1qNuVUixlj3&amp;list=PLOh6mlSStDuR5uaITv-g9dHYjjvlpPO3K
    11,01,2024,17:30,21:00,dj,USAFA vs USMA Boxing,WKDT provided walk-on music for Army Boxing,Demize,2e1c1d03-f204-450c-ac40-e0535ae49ea9,2Tp4L4WIWRSXdvncVd44DL,videoseries?si=23bmc7JmFrWWfKkH&amp;list=PLOh6mlSStDuRVboSuvF3Kquh5xrs1zLeL,videoseries?si=9GjecAv4GJNNMkS0&amp;list=PLOh6mlSStDuRCoOYHL0M0nepVIA5-tAld
    10,31,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,29,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,25,2024,16:30,20:30,dj,Brigade Sandhurst Combatives Competition,WKDT provided DJ support for Brigade Sandhurst Combatives Competition,Demize,4c294755-2493-488f-bc4d-a857c12f5281,5720b5UcDp4PiCmPOEplll,videoseries?si=TEKSO5OukcyYF5wh&amp;list=PLOh6mlSStDuRnCuSS5o0ba3vKAuGGcTt2,videoseries?si=doVZ2z6NqeqP3x1A&amp;list=PLOh6mlSStDuT8SMvAkXUeIm7U_yL3tgU-
    10,19,2024,12:00,16:00,fb,ECU vs USMA,Broadcast live coverage of Army football (Homecoming Game)
    10,18,2024,18:00,20:30,dj,2nd Reg BBQ,WKDT provided DJ support for 2nd Reg BBQ,Coop,bd638bfc-4709-4b7c-a150-41d60bd2ad1f,1vTWO8lt05Sq543ZRbwXT1,videoseries?si=lvVWo8AaBOMnY76F&list=PLOh6mlSStDuQ8rXuQIKYg2Jpw98qYJfI9,videoseries?si=pMeUK0dq9LNL4q-w&list=PLOh6mlSStDuS6EGwOA6j-RvtJHFoPs_Yf
    10,18,2024,17:00,19:30,dj,4th Reg TurkeyBowl,WKDT provided DJ support for 4th Reg TurkeyBowl,Schmitty,1f70effb-d141-4b51-99e7-9f6ee72e7ea5,1UsxpwlNuJeESEds0a5HA0,videoseries?si=2-mq5dK1EiHqWBut&list=PLOh6mlSStDuTCV3DeStLJrqiQKfAFEzBR,videoseries?si=XfTiubVfpGRfHR17&list=PLOh6mlSStDuRSlqQGKQoNsBFAYROWSjsm
    10,17,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for full brigade drill practice
    10,16,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,15,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 3rd/4th drill practice
    10,12,2024,12:00,16:00,fb,UAB vs USMA,Broadcast live coverage of Army football
    10,10,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,08,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice`;
    const events = parseEventMatrix(eventmatrix);
    if (document.getElementById('calendar').children.length === 0) {
        const element = document.getElementById('calendar');
        caleandar(element, events);
    }
    // Add event to overlays (reworked to use Event class)
    events.forEach(event => {
        if (event.Type === "dj" && (event.Services.spotify || event.Services.apple)) {
            const eventRef = `${event.Date.getMonth() + 1}-${event.Date.getDate()}-${event.Date.getFullYear()}_${event.Title.replace(/ /g, '-')}`;
            document.getElementById("overlays").innerHTML += `
            <div class="replayContainer" eventRef="${eventRef}">
                <details open class="contentWrapper">
                    <summary class="replayTitle">${event.Title}${event.DJ ? ` by DJ ${event.DJ}` : ''} | ${event.Date.getMonth()+1}/${event.Date.getDate()}/${event.Date.getFullYear()}</summary>
                    <p>${event.Description}</p>
                    <div id="selectService" class="radioGroup">
                        <input type="radio" id="none" name="service" onClick="changeService('.none')" checked>
                        <label for="none" class="radioLabel">None</label>
                        <input type="radio" id="spotify" name="service" onClick="changeService('.spotify')">
                        <label for="spotify" class="radioLabel">Spotify</label>
                        <input type="radio" id="appleMusic" name="service" onClick="changeService('.appleMusic')">
                        <label for="appleMusic" class="radioLabel">Apple Music</label>
                    </div>
                </details>
                <div class="button closeOverlay" onclick="hideEventOverlay('${eventRef}');">X</div>
                <div class="none service shown">
                    <h3 class="explainer">Please select a music provider from the list above.</h3>
                </div>
                ${event.getServiceEmbeds()}
            </div>`;
        }
    });
}
class Event {
    constructor(month, day, year, startTime, endTime, type, title, description, dj, services = {}) {
        this.Date = new Date(year, month - 1, day);  // month is 0-based in JS
        this.StartTime = startTime;
        this.EndTime = endTime;
        this.Type = type;
        this.Title = title;
        this.Description = description;
        this.DJ = dj;
        this.Services = services;  // Embed fragments by service name: { spotify, apple, ... }
    }
    getFormattedTime() {
        return `${this.StartTime} - ${this.EndTime}`;
    }
    getServiceEmbeds() {
        let embeds = '';
        if (this.Services.spotify) {
            embeds += `<iframe class="spotify service" src="https://open.spotify.com/embed/playlist/${this.Services.spotify}?utm_source=generator" title="Spotify Embed Player" loading="lazy" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
        }
        if (this.Services.apple) {
            embeds += `<iframe class="appleMusic service" src="https://embed.music.apple.com/us/${this.Services.apple}" title="Apple Music Embed Player" loading="lazy" frameborder="0" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>`;
        }
        return embeds;
    }
}
function parseEventMatrix(eventmatrix) {
    return eventmatrix.split('\n').map(event => {
        const [month, day, year, startTime, endTime, type, title, description, dj, tidal, spotify, yt, ytmusic, apple] = event.split(',');
        return new Event(
            parseInt(month, 10),
            parseInt(day, 10),
            parseInt(year, 10),
            startTime,
            endTime,
            type,
            title,
            description,
            dj,
            { spotify: (spotify || '').trim(), apple: (apple || '').trim() }
        );
    });
}
class Calendar {
    constructor(model, date) {
        this.Model = model || {}; // This will be an array of events
        this.Today = new Date();
        this.Selected = date || this.Today;
        this.initSelectedDates();
        this.Prev = new Date(this.Selected.Year, this.Selected.Month - 1, 1);
        if (this.Selected.Month === 0) this.Prev = new Date(this.Selected.Year - 1, 11, 1);
        this.Prev.Days = new Date(this.Prev.getFullYear(), this.Prev.getMonth() + 1, 0).getDate();
    }
    initSelectedDates() {
        this.Selected.Month = this.Selected.getMonth();
        this.Selected.Year = this.Selected.getFullYear();
        // Directly calculate the number of days in the selected month:
        this.Selected.Days = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDate();
        this.Selected.FirstDay = new Date(this.Selected.Year, this.Selected.Month, 1).getDay();
        this.Selected.LastDay = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDay();
    }
    getEventsForDay(day) {
        return this.Model.filter(event => {
            return event.Date.getDate() === day &&
            event.Date.getMonth() === this.Selected.Month &&
            event.Date.getFullYear() === this.Selected.Year;
        }).reverse();  // This will reverse the order of the events
    }
}
function createCalendar(calendar, element, adjuster) {
    if (adjuster !== undefined) {
        const newDate = new Date(calendar.Selected.Year, calendar.Selected.Month + adjuster, 1);
        calendar = new Calendar(calendar.Model, newDate);
        element.innerHTML = '';
    }
    const mainSection = document.createElement('div');
    mainSection.className = "cld-main";
    mainSection.innerHTML += `<style>.cld-main{color:#000;}.cld-title a{color:#000;}</style>`;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Function to create navigation buttons (previous/next month)
    const createNavButton = (className, adjuster) => {
        const button = document.createElement('div');
        button.className = className;
        button.innerHTML = `<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="${adjuster === -1 ? '0,50 75,0 75,100' : '0,0 75,50 0,100'}"></polyline></svg>`;
        button.addEventListener('click', () => createCalendar(calendar, element, adjuster));
        return button;
    };

    // Function to add the date/time title section
    const AddDateTime = () => {
        const datetime = document.createElement('div');
        datetime.className = "cld-datetime";
        datetime.appendChild(createNavButton('cld-rwd cld-nav', -1));
        const indicator = document.createElement('div');
        indicator.id = 'indicator';
        indicator.innerHTML = `${months[calendar.Selected.Month]}, ${calendar.Selected.Year}`;
        datetime.appendChild(indicator);
        datetime.appendChild(createNavButton('cld-fwd cld-nav', 1));
        (document.getElementById('foo') || mainSection).appendChild(datetime);
    };

    // Function to add the day labels (Sun, Mon, etc.)
    const AddLabels = () => {
        const labels = document.createElement('ul');
        labels.className = 'cld-labels';
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(labelText => {
            const label = document.createElement('li');
            label.className = "cld-label";
            label.innerHTML = labelText;
            labels.appendChild(label);
        });
        mainSection.appendChild(labels);
    };

    // Function to create individual day elements
    function createDay(className, dayNumber, events) {
        const day = document.createElement('div');
        day.className = `cld-day ${className}`;
        day.innerHTML = `<p class="cld-number">${dayNumber}</p>`;

        // Highlight today's date
        if ((dayNumber === calendar.Today.getDate()) && (calendar.Selected.Month === calendar.Today.getMonth()) && (calendar.Selected.Year === calendar.Today.getFullYear())) {
            day.id = "today";
        }

        // If events exist for the day, show them
        if (events && events.length > 0) {
            const eventContainer = document.createElement('div');
            eventContainer.className = "cld-event";
            day.classList.add("eventDay");
            events.forEach(event => {
                eventContainer.innerHTML += `
                <div class="cld-title ${event.Type} button" eventRef="${calendar.Selected.Month+1}-${dayNumber}-${calendar.Selected.Year}_${event.Title.replace(/ /g,'-')}">
                <strong>${event.Title}</strong> ${event.StartTime}&#8209;${event.EndTime}
                </div>`;
            });
            day.appendChild(eventContainer);
        }
        return day;
    }

    // Function to add days to the calendar
    function AddDays() {
        const days = document.createElement('div');
        days.id = "cld-days"; // Create the container for the days

        // Add previous month's days if necessary
        for (let i = 0; i < calendar.Selected.FirstDay; i++) {
            days.appendChild(createDay('prevMonth', (calendar.Prev.Days - calendar.Selected.FirstDay) + (i + 1), []));
        }

        // Add current month's days
        for (let i = 0; i < calendar.Selected.Days; i++) {
            const dayEvents = calendar.getEventsForDay(i + 1);
            const day = createDay('currMonth', i + 1, dayEvents);
            days.appendChild(day);
        }

        // Add next month's days if necessary
        const totalDays = calendar.Selected.FirstDay + calendar.Selected.Days;
        const extraDays = totalDays > 35 ? 6 : totalDays < 29 ? 20 : 13;
        for (let i = 0; i < (extraDays - calendar.Selected.LastDay); i++) {
            days.appendChild(createDay('nextMonth', i + 1, []));
        }

        mainSection.appendChild(days);
    }

    // Append the whole structure to the main element
    element.appendChild(mainSection);
    AddDateTime();
    AddLabels();
    AddDays();
}

function caleandar(el, eventData) {
    const calendar = new Calendar(eventData);
    createCalendar(calendar, el);
}
// Non calendar stuff
function scrollElementIntoContainerView() {
    const container = document.getElementById('cld-days');
    const element = document.getElementById('today');
    if (window.innerWidth < 1024 && container && element) {
        const offset = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
        container.scrollTo({ top: container.scrollTop + offset, behavior: 'instant' });
    }
}
function updateURL(eventRef) {
    if (eventRef === '') {
        window.history.pushState({ path: '/events' }, "", '/events');
    } else {
        const newURL = `/events?${eventRef}`;
        window.history.pushState({ path: newURL }, "", newURL);
    }
}
function showEventOverlay(eventRef) {
    updateURL(eventRef);
    const overlay = document.querySelector(`#overlays [eventRef="${eventRef}"]`);
    if (overlay) {
        overlay.classList.toggle('shown');
        shrinkHeader();
        document.body.style.overflow = 'hidden';
    }
}
function hideEventOverlay(eventRef) {
    document.body.style.overflow = '';
    updateURL('');
    const overlay = document.querySelector(`#overlays [eventRef="${eventRef}"]`);
    if (overlay) {
        overlay.querySelector('details').toggleAttribute('open');
        overlay.querySelectorAll('iframe').forEach(iframe => {
            const src = iframe.src;
            iframe.src = '';
            iframe.src = src;
        });
        setTimeout(() => {overlay.classList.toggle('shown');}, 100);
    }
}
function changeService(choice) {
    document.querySelectorAll(".loading").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(".service").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(choice).forEach(element => {
        element.classList.add("shown");
    });
    if (choice===".none") {
        document.querySelectorAll("details").forEach(element => {
            element.open = true;
        });
    } else {
        document.querySelectorAll("details").forEach(element => {
            element.open = false;
        });
    }
}
// Listener based code
window.onload = function() {
    loadEvents();
    const eventRef = window.location.search.substring(1);  // Extract the part after the '?'
    if (eventRef) {
        // Show the overlay for the event corresponding to the eventRef
        setTimeout(() => {showEventOverlay(eventRef);}, 1000);
    }
};
window.addEventListener('resize', scrollElementIntoContainerView);
document.addEventListener('DOMContentLoaded', () => {
    scrollElementIntoContainerView();
    document.getElementById('calendar').addEventListener('wheel', function(event) {
        const container = event.target.closest('.cld-event');
        if (container) {
            event.preventDefault();
            const scrollAmount = event.deltaY < 0 ? -10 : 10;  // Scrolls by 10px
            container.scrollTop += scrollAmount;
        }
    });
    document.getElementById('calendar').addEventListener('click', function(event) {
        let target = event.target.closest('.dj');
        if (target) {
            showEventOverlay(target.getAttribute('eventRef'));
        }
    });    
});

















