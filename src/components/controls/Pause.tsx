import { useContext } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { corePhrases } from '../../tools/phrases' 
import { AppContext } from '../../tools' 


const Pause = () => {
  const { pauseGame, resumeGame, state } = useContext(AppContext)

  const { isPaused, isRunning } = state.current

  if(!isRunning) return null

  return(
    <button 
      className={css(component.btn)}
      onClick={
        isPaused
          ? resumeGame
          : pauseGame
      }
    >
      <div className={css(component.beforeBtn)}/>
        {
          isPaused
            ? corePhrases.btns.resume
            : corePhrases.btns.pause
          }
    </button>
  )
}

const component = StyleSheet.create({
  btn: {
    display: 'block',
    textAlign: 'center',
    position: 'relative',
    fontWeight: 600,
    fontSize: 16,
    textTransform: 'capitalize',
    transition: 'all .3s',
    color: 'var(--white-clr)',
    padding: '10px 24px',
    backgroundColor: 'var(--dark-clr)',
    borderRadius: 8,
    touchAction: 'manipulation',
    '@media (hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: '#333'
      }
    },
    ':active': {
      transform: 'scale(.97)'
    },
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#555'
    },
    ':focus-visible :nth-child(1n)': {
      borderColor: '#333',
      backgroundColor: '#ddd'
    }
  },
  beforeBtn: {
    position: 'absolute',
    top: -4,
    left: -4,
    zIndex: -1,
    borderRadius: 12,
    transition: 'all .3s',
    width: 'calc(100% + 8px)',
    height: 'calc(100% + 8px)',
    border: 'solid 2px transparent'
  }
})

export default Pause