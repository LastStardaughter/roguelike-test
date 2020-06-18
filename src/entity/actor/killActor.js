import {colors} from '../../ui/colors';
import {EngineModes} from '../../engine/engineModes';
import {RenderOrders} from '../../ui/renderOrders';
import {Message} from '../../lib/messageLog';

export const killPlayer = function(player) {
  player.char = '%';
  player.color = colors.DARK_RED;
  player.renderOrder = RenderOrders.CORPSE;

  return [new Message('You died!', colors.DARK_RED), EngineModes.PLAYER_DEAD];
};

export const killActor = function(actor) {
  const actorName = actor.name.slice(0, 1).toUpperCase() + actor.name.slice(1);
  const message = new Message(`${actorName} is dead!`, colors.DARK_RED);

  actor.char = '%';
  actor.color = colors.DARK_RED;
  actor.blocksMove = false;
  actor.combat = null;
  actor.ai = null;
  actor.name = `${actor.name} corpse`;
  actor.renderOrder = RenderOrders.CORPSE;

  return message;
};