export const switcherArtRegister = async (switcherFormBox) => {
  const ArtSwichterReg = document.createElement('article')
  ArtSwichterReg.className = 'ArtSwichterReg'
  switcherFormBox.style.backgroundImage =
    "url('https://res.cloudinary.com/digcf0lad/image/upload/v1727112090/unsplash_fIHozNWfcvs_rbwk0q.png')"

  ArtSwichterReg.innerHTML = `<h2 class="titleSwichterReg"> Join Us </h2> 
  <p>Connect with people who share your interests. Create and join events around you, and start building your community today.</p>
  <p>If you're registered, go to Login.</p>`

  switcherFormBox.append(ArtSwichterReg)

  const ArtSwichterLog = document.querySelector('.ArtSwichterLog')
  ArtSwichterLog && ArtSwichterLog.remove()
}
export const switcherArtLogin = async (switcherFormBox) => {
  const ArtSwichterLog = document.createElement('article')
  ArtSwichterLog.className = 'ArtSwichterLog'
  switcherFormBox.classList.toggle('Reg')
  switcherFormBox.style.backgroundImage =
    "url('https://res.cloudinary.com/digcf0lad/image/upload/v1727112091/unsplash_nwLTVwb7DbU_rqy8yp.png')"
  ArtSwichterLog.innerHTML = `<h2 class="titleSwichterLog"> Welcome Back</h2> <p>Log in to create your event, see what your friends are up to, and join the excitement in your city!</p> <p>Not registered? Join Us.</p>`
  const ArtSwichterReg = document.querySelector('.ArtSwichterReg')
  ArtSwichterReg.remove()
  switcherFormBox.append(ArtSwichterLog)
}
