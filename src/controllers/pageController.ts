import { Request , Response } from "express";
import { createMenu} from "../helpers/createMenu";

export const home = (req : Request, res: Response) => {
    res.render("pages/page" ,{
        menu: createMenu('all'),

        banner: {
            title: "Todos os animais" ,
            background: "allanimals.jpg"
        }
    })
}

export const dogs = (req : Request, res: Response) => {
    res.render("pages/page" ,{

        menu: createMenu('dog'),
        banner: {
            title: "Todos os cachorros" ,
            background: "banner_dog.jpg"
        }
    })
}

export const cats = (req : Request, res: Response) => {
    res.render("pages/page" ,{

        menu: createMenu('cat'),
        banner: {
            title: "Todos os gatos" ,
            background: "banner_cat.jpg"
        }
    })
}

export const fishes = (req : Request, res: Response) => {
    res.render("pages/page" ,{
        menu: createMenu('fish'),

        banner: {
            title: "Todos os peixes" ,
            background: "banner_fish.jpg"
        }
    })
}