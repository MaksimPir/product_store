const db=require('../../db')
const ApiError=require('../../exceptions/api-error')
class FilmService{
    async getFilmById(filmId)
    {
        const candidate=await db.query(`SELECT * FROM film WHERE id='${filmId}'`)
        if(candidate.rowCount==0) return false
        return candidate.rows[0]
    }
    async getFilms()
    {
        const candidate=await db.query(`SELECT * FROM film`)
        if(candidate.rowCount==0) return false
        return candidate.rows
    }
}

module.exports=new FilmService()