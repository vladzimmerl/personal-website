import './courses.css'
import { useState } from 'react'

function Courses() {

  const courses = '_courses'
  const courseNumberColumns = '_courses-course-number-columns'
  const columnText = '_courses-column-text'

  return (
    <div className={courses}>

      <div className={courseNumberColumns}>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>

         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>

         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>

         <p className={columnText}>COMP</p>
         <p className={columnText}>COMP</p>

         <p className={columnText}>ECSE</p>
      </div>

      <div className={courseNumberColumns}>
         <p className={columnText}> 206: </p>
         <p className={columnText}> 250: </p>
         <p className={columnText}> 251: </p>
         <p className={columnText}> 273: </p>
         <p className={columnText}> 302: </p>

         <p className={columnText}> 303: </p>
         <p className={columnText}> 307: </p>
         <p className={columnText}> 310: </p>
         <p className={columnText}> 330: </p>
         <p className={columnText}> 360: </p>

         <p className={columnText}> 361: </p>
         <p className={columnText}> 409: </p>
         <p className={columnText}> 421: </p>
         <p className={columnText}> 424: </p>

         <p className={columnText}> 521: </p>
         <p className={columnText}> 523: </p>

         <p className={columnText}> 429: </p>
      </div>

      <div>
         <p className={columnText}>Introduction to Software Systems</p>
         <p className={columnText}>Introduction to Computer Science</p>
         <p className={columnText}>Algorithms and Data Structures</p>
         <p className={columnText}>Introduction to Computer Systems</p>
         <p className={columnText}>Programming Languages and Paradigms</p>

         <p className={columnText}>Software Design</p>
         <p className={columnText}>Principles of Web Design</p>
         <p className={columnText}>Operating Systems</p>
         <p className={columnText}>Theory of Computation</p>
         <p className={columnText}>Algorithm Design</p>

         <p className={columnText}>Software Engineering Project</p>
         <p className={columnText}>Concurrent Programming</p>
         <p className={columnText}>Database Systems</p>
         <p className={columnText}>Artificial Intelligence</p>

         <p className={columnText}>Modern Computer Games</p>
         <p className={columnText}>Language Based Security</p>

         <p className={columnText}>Software Validation</p>
      </div>

    </div>
  )
}

export default Courses
