import Button from '../ui/Button';
import DateIcon from '../icons/DataIcons';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import classes from './event-item.module.css';

const EventItem = props => {

  const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = props.location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={'/' + props.image} alt={props.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{props.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time style={{ color: '#03be9f' }}>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${props.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;