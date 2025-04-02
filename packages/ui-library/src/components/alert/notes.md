# WIP component

## Timeout function

let timer: NodeJS.Timeout | undefined = undefined;

if (timeout) {
timer = setTimeout(() => {
return close alert
}, timeout);
}

## HTML concepts

{timeout &&
<div className={style.progressWrapper}>
<div className={style.progressBar} style={{animationDuration: `${(timeout / 1000) + .5}s`}}/>
</div>
}

## CSS

.progressWrapper {
background-color: var(--uil-grey-alt);

      & .progressBar {
        border: 2px solid var(--uil-grey-dark);
        animation-duration: 2s;
        animation-iteration-count: initial;
        animation-name: progress;
      }
    }

    @keyframes progress {
      0% {
        width: 100%;
      }

      100% {
        width: 0;
      }
    }