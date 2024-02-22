/* eslint-disable react-hooks/exhaustive-deps */
//import { useEffect } from 'react';
import styles from './Card.module.css';
import { useState } from 'react';
import { Tags } from './Tags';
import { Button } from './Button'

export const Card = () => {

  const [quote, setQuote] = useState({
    author: 'George Bernard Shaw',
    tags: ['Famous Quotes', 'Inspirational'],
    content: 'Learn from yesterday, live for today, hope for tomorrow.'
  });

  const fetchQuote = async() =>{
    try {
      const response = await fetch('https://api.quotable.io/quotes/random', {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
      });
      const dataQuote = await response.json();
      setQuote(dataQuote[0])
    } catch (error) {
      console.log(error);
    }
  }

  const clipBoard = (quoteCopy) =>{
    navigator.clipboard.writeText(quoteCopy);
    console.log(quoteCopy)
  }
  // useEffect(()=>{
  //   fetchQuote();
  //   console.log(quote)
  // },[])

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.card__title}>{quote.author}</h2>
        <div className={styles.card__tags}>
          {
            quote.tags.map((tag,index) => <Tags tagName={tag} key={index}></Tags>)
          }
        </div>
        <p className={styles.card__quotes}>&quot;{quote.content}&quot;</p>
      </div>
      <div className={styles.content__btn}>
        <Button typeBtn={'new'} imgRoute={'../assets/Regroup.svg'} handletClick={fetchQuote} />
        <Button typeBtn={'copy'} imgRoute={'../assets/link.svg'} handletClick={() => clipBoard(quote.author)}/>
      </div>
    </>
  )
}
