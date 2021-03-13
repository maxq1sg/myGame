import { saveResultActions } from './../redux/types/savedTypes';
import { isLoadingTypes } from './../redux/types/isLoadingTypes';
import axios from 'axios';
import store from '../redux/store';
import { modalContainer } from './../index';
import { checkHeight } from './checkHeight';
import formValidation from './formValidation';


interface IDataItem {
    name: string,
    score: number
}

export function welcomePlayer() {
    modalContainer!.classList.remove("horizontal")
    modalContainer!.innerHTML = `<div class="welcome__intro">Добро пожаловать!</div>
    <div class="welcome__buttons">
        <button class="button__new-game">Новая игра</button>
        <button class="button__leader-list">Список лидеров</button>
    </div>`
}

export function hideWelcomePlayer() {
    modalContainer!.classList.remove("horizontal")

    modalContainer!.innerHTML = ""
}

export function afterPlay() {
    modalContainer!.classList.remove("horizontal")

    modalContainer!.innerHTML = `<div class="welcome__intro">Ваш результат: <div>${store.getState().score} очков</div></div>
    <div class="welcome__buttons">
        <button class="button__new-game">Новая игра</button>
        <button class="button__leader-list">Список лидеров</button>
        <button class="button__save-result">Сохранить результат</button>

        </div>`
}


export async function leaderList(isGetRequest?: boolean, name?: any) {
    if (checkHeight() < 700) {
        modalContainer!.classList.add("horizontal")
    }
    modalContainer!.innerHTML = `<div class="welcome__intro">Лучшие игроки</div>
   <div class="leader-list__container"> </div>
    <div class="welcome__buttons">
        <button class="button__new-game">Новая игра</button>
    </div>`
    const llcont = modalContainer!.querySelector(".leader-list__container")
    const buttons = document.querySelector(".welcome__buttons")
    store.dispatch({
        type: isLoadingTypes.IS_LOADING
    })
    llcont!.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
    if (isGetRequest) {
        const { data } = await axios.get("http://localhost:5000/results", {
            headers: {
                "access": "123"
            }
        })
        store.dispatch({
            type: isLoadingTypes.IS_LOADING
        })
        llcont!.innerHTML = ""

        const ul = document.createElement("ul")
        ul.className = "leader-list"
        llcont!.append(ul)
        let counter = 1

        data.forEach((item: IDataItem) => {
            ul!.insertAdjacentHTML("beforeend", `<li class="leader-list__item ${counter == data.index ? " actual" : ""} item">
            <div>
                <span
                    class="item__counter">${counter}
                </span>
                <span class="item__name">${item.name}</span>
            </div>
             <span class="item__score">${item.score}</span>
        </li>`)
            ++counter
        });
    } else {
        const { data } = await axios.post("http://localhost:5000/results", {
            name,
            score: store.getState().score
        })
        store.dispatch({
            type: saveResultActions.CHANGE_SAVED
        })
        store.dispatch({
            type: isLoadingTypes.IS_LOADING
        })
        llcont!.innerHTML = ""
        const ul = document.createElement("ul")
        ul.className = "leader-list"
        llcont!.append(ul)
        let counter = 1
        data.data.forEach((item: IDataItem) => {

            ul!.insertAdjacentHTML("beforeend", `<li class="leader-list__item ${counter == data.index ? " actual" : ""} item">
            <div>
                <span
                    class="item__counter">${counter}
                </span>
                <span class="item__name">${item.name}</span>
            </div>
             <span class="item__score">${item.score}</span>
        </li>`)
            ++counter
        })
        ul!.insertAdjacentHTML("afterend", `<div class="leader-list__index"> Твой результат на ${data.index} месте!</div>`)

    }
    buttons!.insertAdjacentHTML("beforeend", `${store.getState().gamePhase == 2 && !store.getState().saved ? `<button class="button__save-result">Сохранить результат</button>` : ""}
        `)
}


export function saveResultForm() {
    modalContainer!.classList.remove("horizontal")
    modalContainer!.innerHTML = `    <div class="welcome__intro">Сохраните свой результат</div>
    <form class="form__result" action="/" method="POST">
    <input autocomplete="off" class="name-input" type="text" name="name" placeholder="введите имя">
    <div class="alert-message"></div>
    <button>отправить</button>
    <button class="button__new-game">Новая игра</button>
    </form>`
    const input = <HTMLInputElement>document.querySelector(".name-input")
    input.focus()
    input.oninput = () => {
        formValidation(input)
    }
}





