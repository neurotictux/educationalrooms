import { Injectable } from '@angular/core'
import { AccountService } from './account.service';
import { QuestionService } from './question.service';
import { UserDataModel } from '../models/user-data.models';
import { Globals } from '../globals';
import { Scores } from '../models/scores.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private accountService: AccountService,
    private questionService: QuestionService) {
  }

  getUser(): UserDataModel {
    return JSON.parse(localStorage.getItem('USER'))
  }

  setToken(token: string): void {
    if (token) {
      localStorage.setItem('TOKEN', token)
      this.accountService.getAccount().subscribe((user: UserDataModel) => {
        localStorage.setItem('USER', JSON.stringify(user))
        Globals.notifyUserChanged(user)
      }, err => {
        console.log(err)
      })
    } else {
      localStorage.removeItem('USER')
      localStorage.removeItem('TOKEN')
      localStorage.removeItem('SCORES')
      localStorage.removeItem('CATEGORIES')
      Globals.notifyUserChanged(null)
    }
  }

  setScores(scores: Scores): void {
    localStorage.setItem('SCORES', JSON.stringify(scores))
  }

  getScores(): Scores {
    return JSON.parse(localStorage.getItem('SCORES'))
  }

  updateCategories(categories: string[]): void {
    let cats = this.getCategories()
    if (cats) {
      categories.concat(cats)
      categories.filter((p, i) => categories.indexOf(p) === i)
    }
    localStorage.setItem('CATEGORIES', JSON.stringify(categories))
  }

  getCategories(): string[] {
    return JSON.parse(localStorage.getItem('CATEGORIES'))
  }

  setTutorial(step: number) {
    localStorage.setItem('TUTORIAL', step.toString())
  }

  getTutorial(): number {
    return localStorage.getItem('TUTORIAL') ? Number(localStorage.getItem('TUTORIAL')) : 0
  }
}