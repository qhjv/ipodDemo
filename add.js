var playlists = document.querySelector('.playlists');
var list = document.querySelectorAll('.musics-list');

var re1 = document.querySelector('.return1');
var re2 = document.querySelector('.return2');
var tieude = document.querySelector('.header h3');
var thumucnhac = document.querySelectorAll('.music-list .fullmusic');

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

for (i = 0; i < list.length; i++) {
    
    list[i].addEventListener('click',function(){
        playlists.classList.add('chuyentrang');
            re1.classList.add('trove');
            tieude.innerHTML = "Music";

        var listkichhoat = this ;
        var j = 0;
        for(j=0;listkichhoat = listkichhoat.previousElementSibling;j++){
            
        }  
        
        for (k = 0; k < thumucnhac.length; k++) {
            
            thumucnhac[k].classList.remove('hienthi');
            thumucnhac[j].classList.add('hienthi');
            // app.render()
        }
        //auto click vào playlist thì lên đầu
        $('.music-list').scrollTop=0;
    });

     
}

/*Music*/
const playerWindow = document.getElementById("players");
 const audio = document.getElementById("audio");
 const name = document.getElementById("name");
 const category = document.getElementById("category");
 const thumbnail = document.getElementById("thumbnail");
 const playBtn = document.getElementById("playBtn");
 const progress = document.getElementById("progress");
 const ttview = document.getElementById("ttview");
 const tcview = document.getElementById("tcview");
 const volumeBar = document.getElementById("volumeBar");
 
 const musicList = document.getElementById("music-list");
 const body = document.querySelector("body");

 
 
 
 
 // variable 
 const app ={
   currentIndex:0,
   isPlaying:false,
   isRamdom:false,
   isRepeat:false,
  songs: [
 {
 id:1,
 category:"Sơn tùng MTP",
 name:"Có chắc yêu là đây",
 src:"./mp3/son_tung_m_tp_co_chac_yeu_la_day.mp3",
 image:"./img/cochacyeuladay.jpg",
 },
 {
 id:2,
 category:"Amee-RickyStar-LăngLD",
 name:"Tình bạn diệu kỳ",
 src:"./mp3/TinhBanDieuKy-AMeeRickyStarLangLD.mp3",
 image:"./img/tinhbandieuky.jpg",
 },
 {
 id:3,
 category:"Quân A.P",
 name:"Lời xin lỗi vụng về",
 src:"./mp3/LoiXinLoiVungVe-QuanAP.mp3",
 image:"./img/loixinloivungve.jpg",
 },
 {
 id:4,
 category:"Đen-Justatee",
 name:"Đi về nhà",
 src:"./mp3/DiVeNha-DenJustaTee-6892051.mp3",
 image:"./img/divenha.jpg",
 },
 {
 id:5,
 category:"Hoàng Dũng",
 name:"Nàng thơ",
 src:"./mp3/NangTho-HoangDung-6413381.mp3",
 image:"./img/nangtho.jpg",
 },
 {
 id:6,
 category:"Bichphuong-Hieuthuhai-GDucky-PhucDu",
 name:"Việt Nam Diệu Kỳ",
 src:"./mp3/dieu_ky_viet_nam_bich_phuong_x_phuc_du_x_hieuthuhai_x_gducky.mp3",
 image:"./img/dieukyvietnam.jpg",
 },

 {
 id:7,
 category:"sofia-khoi",
 name:"Nhớ người hay nhớ ta",
 src:"./mp3/nho_nguoi_hay_nho_sofia_x_khoi.mp3",
 image:"./img/nhonguoihaynho.jpg",
 },
 {
 id:8,
 category:"FAY",
 name:"Tình yêu khủng long",
 src:"./mp3/TinhYeuKhungLong-FAY.mp3",
 image:"./img/tinhyeukhunglong.jpg",
 },
 {
 id:9,
 category:"Juky San-RedT",
 name:"Phải chăng em đã yêu",
 src:"./mp3/PhaiChangEmDaYeu-JukySanRedT.mp3",
 image:"./img/phaichangemdayeu.jpg",
 },
 
 {
 id:10,
 category:"Hoài lâm",
 name:"Hoa nở không màu",
 src:"./mp3/HoaNoKhongMau1-HoaiLam.mp3",
 image:"./img/hoanokhongmau.jpg",
 },
 {
 id:11,
 category:"Tage",
 name:"Ganh tị",
 src:"./mp3/tage_ganh_ti.mp3",
 image:"./img/ganhti.jpg",
 },
 {
 id:12,
 category:"Min-16Type",
 name:"Trên tình bạn dưới tình yêu",
 src:"./mp3/TrenTinhBanDuoiTinhYeu-MIN16Typh.mp3",
 image:"./img/trentinhbanduoitinhyeu.jpg",
 },
 {
 id:13,
 category:"Thịnh suy",
 name:"Chuyện rằng",
 src:"./mp3/ChuyenRang1-ThinhSuy.mp3",
 image:"./img/chuyenrang.jpg",
 },
 {
 id:14,
 category:"Bình Gold",
 name:"Bịt khẩu trang vào",
 src:"./mp3/binh_gold_bit_khau_trang_vao.mp3",
 image:"./img/bitkhautrangvao.jpg",
 },
 {
 id:15,
 category:"Pháo",
 name:"Hai phút hơn",
 src:"./mp3/2_phut_hon_phao.mp3",
 image:"./img/2phuthon.jpg",
 },
 {
 id:16,
 category:"Lê Bảo Bình",
 name:"Níu Duyên",
 src:"./mp3/NiuDuyenOrinnRemix-LeBaoBinh.mp3",
 image:"./img/niuduyen.jpg",
 },
 {
 id:17,
 category:"Ngô Kiến Huy",
 name:"72 phép thần thông",
 src:"./mp3/72PhepThanThongFidRemix-NgoKienHuyYunoBigBoiMasew.mp3",
 image:"./img/72phepthanthong.jpg",
 },
 {
 id:18,
 category:"MiuLe-DaLab",
 name:"Gác lại âu lo",
 src:"./mp3/gac_lai_au_lo_da_lab_x_miu_le.mp3",
 image:"./img/gaclaiaulo.jpg",
 },
 {
 id:19,
 category:"Jack",
 name:"Đom đóm",
 src:"./mp3/domdom_jack.mp3",
 image:"./img/domdom-jack.jpg",
 },
 {
 id:20,
 category:"Hoài Lâm",
 name:"Buồn làm chi em ơi",
 src:"./mp3/BuonLamChiEmOi1-HoaiLam.mp3",
 image:"./img/buonlamchiemoi.jpg",
 },
  ],
  render:function(){
      const htmls = this.songs.map(song => {
          return `
          <div class="list music" data-id="${song.id}" >
          <div class="img-list ">
              <img id="list-img" src="${song.image}" alt="">
          </div>
          <div class="name-list name-music ">
              <h3 id="list-name">${song.name}</h3>
              <small id="list-small">${song.category}</small>
          </div>
          <div class="next-list next-music">
              <i  class="fas fa-caret-right "></i>
              <div class="equalize" data-music="${song.id}">
               <span></span>
               <span></span>
               <span></span>
              </div>
          </div>   
      </div>
          `
      })
      
    //  if($('.hienthi')){
    //   $('.hienthi').innerHTML = htmls.join('')
    //  }
    html1=htmls.slice(0,10)
    html2=htmls.slice(10,15)
    html3=htmls.slice(15,20)
    $('#fullmusic1').innerHTML = html1.join('')
    $('#fullmusic2').innerHTML = html2.join('')
    $('#fullmusic3').innerHTML = html3.join('')
    
  },
  getCurrentsong:function(){
    return this.songs[this.currentIndex]
  },
  xuly:function(){
    const _this = this
        
  
  
     //sang trang player
     for(j=0;j<$$('.music').length;j++){
    
      $$('.music')[j].onclick = function(){
        const idmusic = this.dataset.id
           tieude.classList.add('tieudenhay')
           //đĩa nhỏ xuất hiện
           $(".imgplaying").classList.add('trove')
        // thêm mục đang phát
            // $$(".next-music i")[idmusic-1].style.display = "none"
            
            //Thêm phát nhạc
            for (k = 0; k < $$(".equalize").length; k++) {
              
              $$(".equalize")[idmusic].classList.add('trove')
              $$(".equalize")[k].classList.remove('trove')

            }
            //Xóa dấu next
            for ( q = 0; q < $$(".next-music i").length; q++) {
              $$(".next-music i")[idmusic-1].classList.add('bienmat')
              $$(".next-music i")[q].classList.remove('bienmat')
              
            }
            //nút play sáng khi chọn nhạc
            
             $('.fa-play').classList.add('nutsang')
           //sang trang player 
        playlists.classList.add('chuyentrang2');
        re1.classList.remove('trove');
        re2.classList.add('trove');
        tieude.innerHTML = "Playing";
        if(idmusic){
          _this.currentIndex=idmusic;
          _this.loadNhac()

          setTimeout(function(){
            $("#audio").play()
            
            
            $("#audio").ontimeupdate = function(){
              const ds = parseInt($("#audio").duration % 60)
              const dm = parseInt(($("#audio").duration / 60) % 60)
              $("#ttview").textContent = dm + ':' + ds;
              
                $("#progress").value = $("#audio").currentTime 
              
              
              var cs = parseInt($("#audio").currentTime % 60)
              var cm = parseInt(($("#audio").currentTime / 60) % 60)
              $("#ctview").textContent = cm + ':' + cs;
              if($("#audio").duration){
                const phantramprogress = Math.floor($("#audio").currentTime / $("#audio").duration *100)
                $("#progress").value = phantramprogress
              }
            }
            //khitua
            $("#progress").onchange = function(e){
              $("#audio").currentTime = $("#audio").duration/100 * e.target.value
            }
            
          },1000)
           
        }
        //Xử lý khi phát nhạc
    $('.fa-play').onclick= function(){
      if($("#audio").play() && _this.isPlaying ){
        $("#audio").pause()
        $('.fa-play').classList.remove('nutsang') 
        tieude.classList.remove('tieudenhay')
        quaydia.pause()
        quaydianho.pause()
        _this.isPlaying = false;
      }else {
        _this.isPlaying = true;
        $("#audio").play()
        quaydia.play()
        quaydianho.play()
        $('.fa-play').classList.add('nutsang')
        tieude.classList.add('tieudenhay')
      }
    }
         //next song
    
                $(".fa-fast-forward").onclick=function(){
                  
                  if(_this.isRamdom==true){
                    _this.Randomsong()
                    
                  }else  {
                     _this.nextSong()
                    }
                    //Thêm phát nhạc
            for (k = 0; k < $$(".equalize").length; k++) {
              
              $$(".equalize")[_this.currentIndex].classList.add('trove')
              $$(".equalize")[k].classList.remove('trove')

            }
            //Xóa dấu next
            for ( q = 0; q < $$(".next-music i").length; q++) {
              $$(".next-music i")[_this.currentIndex-1].classList.add('bienmat')
              $$(".next-music i")[q].classList.remove('bienmat')
              
            }
              }
        //prev song
        $(".fa-fast-backward").onclick=function(){
                  
          if(_this.isRamdom==true){
            _this.Randomsong()
            
          }
          else  {
             _this.prevSong()
            }
             //Thêm phát nhạc
             for (k = 0; k < $$(".equalize").length; k++) {
              
              $$(".equalize")[_this.currentIndex].classList.add('trove')
              $$(".equalize")[k].classList.remove('trove')

            }
            //Xóa dấu next
            for ( q = 0; q < $$(".next-music i").length; q++) {
              $$(".next-music i")[_this.currentIndex-1].classList.add('bienmat')
              $$(".next-music i")[q].classList.remove('bienmat')
              
            }
        }
        //Khi ramdom
        $(".fa-random").onclick = function(e){
           _this.isRamdom = ! _this.isRamdom
           $(".fa-random").classList.toggle('nutsang',_this.isRamdom)
           if(_this.isRepeat==true){
            $(".fa-redo-alt").classList.remove('nutsang');
            _this.isRepeat=false;
          }
        }
        //khi repeat
        $(".fa-redo-alt").onclick = function(e){
            _this.isRepeat = !_this.isRepeat
            $(".fa-redo-alt").classList.toggle('nutsang',_this.isRepeat)
            if(_this.isRamdom==true){
              $(".fa-random").classList.remove('nutsang');
              _this.isRamdom=false;
            }
        }

      }
      
    }
    
    //quay dĩa
     const quaydia = $("#thumbnail").animate([
       {transform:'rotate(360deg)'}
     ],{
       duration:10000,
       iterations:Infinity
     })
     const quaydianho = $("#imgplaying").animate([
      {transform:'rotate(360deg)'}
    ],{
      duration:10000,
      iterations:Infinity
    })
     
   //khi hết nhạc
   $("#audio").addEventListener("ended", () => {
    if(_this.isRamdom==true){
      _this.Randomsong()
      
    }
    else if(_this.isRepeat==true){
      $("#audio").play()
    }
    else  {
       _this.nextSong()
      }
       //Thêm phát nhạc
       for (k = 0; k < $$(".equalize").length; k++) {
              
        $$(".equalize")[_this.currentIndex].classList.add('trove')
        $$(".equalize")[k].classList.remove('trove')

      }
      //Xóa dấu next
      for ( q = 0; q < $$(".next-music i").length; q++) {
        $$(".next-music i")[_this.currentIndex-1].classList.add('bienmat')
        $$(".next-music i")[q].classList.remove('bienmat')
        
      }
   })
  

  

    
  },
  loadNhac:function(){
        //load nhạc vào playing
        const musicimg = $("#thumbnail")
        const musicheading = $(".name")
        const musicsmall = $("#musicsmall")
        const musicaudio = $("#audio")
        const musicplaying = $("#imgplaying")

        musicheading.textContent=this.songs[this.currentIndex-1].name
        musicsmall.textContent=this.songs[this.currentIndex-1].category
        musicimg.src=this.songs[this.currentIndex-1].image
        musicplaying.src=this.songs[this.currentIndex-1].image
        musicaudio.src=this.songs[this.currentIndex-1].src
        },
        //nextsong
        nextSong:function(){
          if($("#audio").play() ){
            this.currentIndex++;
            if(this.currentIndex>=this.songs.length){
            this.currentIndex=0
            }
            this.loadNhac()
            $("#audio").play()
          }else {
            
            
          }
        },
        //prevsong
        prevSong:function(){
          if($("#audio").play() ){
            this.currentIndex--;
            if(this.currentIndex<0){
            this.currentIndex=this.songs.length-1
            }
            this.loadNhac()
            $("#audio").play()
          }else {
            
            
          }
        },
        //đổi chế độ phát khi đổi bài
        trinhphat:function(){
           
            //Thêm phát nhạc
            for (k = 0; k < $$(".equalize").length; k++) {
              
              $$(".equalize")[this.currentIndex].classList.add('trove')
              $$(".equalize")[q].classList.remove('trove')
              
            }
            //Xóa dấu next
            for ( q = 0; q < $$(".next-music i").length; q++) {
              $$(".next-music i")[this.currentIndex].classList.add('bienmat')
              $$(".next-music i")[q].classList.remove('bienmat')
              
            }
        },
   //Xử lý khi random bài hát
   Randomsong:function(){
     let newIndex
      do{
        newIndex = Math.floor(Math.random()*this.songs.length)
      }while(newIndex===this.currentIndex)
      this.currentIndex= newIndex
      
      this.loadNhac()
      $("#audio").play()
      
   },
  start:function(){
      this.render()
      this.xuly()
      
  }
}
app.start()

// trở về    
re1.onclick = function(){
  
  playlists.classList.remove('chuyentrang');
  re1.classList.remove('trove');
  tieude.innerHTML = "Playlists";
  
}
//ấn playing nhỏ
$("#imgplaying").onclick=function(){
  
  playlists.classList.add('chuyentrang2');
  
  
        re2.classList.add('trove');
        re2.onclick = function(){
          $('.music-list').scrollTop=0;
          playlists.classList.remove('chuyentrang2');
          playlists.classList.add('chuyentrang');
          re2.classList.remove('trove');
          re1.classList.add('trove');
          tieude.innerHTML = "Music";
          
        }
        tieude.innerHTML = "Playing";
}
$(".imgplaying").onclick=function(){
  $(".imgplaying").classList.toggle('imgplayingtrove')
}

re2.onclick = function(){
  playlists.classList.remove('chuyentrang2');
  re2.classList.remove('trove');
  re1.classList.add('trove');
  tieude.innerHTML = "Music";
  
}

//info

$(".text-name").addEventListener('mouseenter',function(){
  
  setTimeout(function(){
    $(".text-name").innerHTML="QH-JV"
  },300)
})
$(".text-name").addEventListener('mouseout',function(){
  setTimeout(function(){
    $(".text-name").innerHTML="©2020 BY"
  },300)
})
$(".text-fb").addEventListener('mouseenter',function(){
  
  setTimeout(function(){
    $(".text-fb").innerHTML="FACEBOOK"
  },300)
})
$(".text-fb").addEventListener('mouseout',function(){
  setTimeout(function(){
    $(".text-fb").innerHTML="FOLLOW ME"
  },300)
})
$(".text-ig").addEventListener('mouseenter',function(){
  
  setTimeout(function(){
    $(".text-ig").innerHTML="INSTAGRAM"
  },300)
})
$(".text-ig").addEventListener('mouseout',function(){
  setTimeout(function(){
    $(".text-ig").innerHTML="FOLLOW ME"
  },300)
})