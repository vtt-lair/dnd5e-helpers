/**
 * Main Module Organizational Tools
 */
import { MODULE } from './module.js';
import { logger } from './logger.js';

/**
 * Sub Modules
 */
import { DnDWildMagic } from './modules/DnDWildMagic.js';
import { RestEffects } from './modules/RestEffects.js';
import { CoverCalculator } from './modules/CoverCalculator.js';
import { ActionManagement } from './modules/ActionManagement.js';
import { TemplateScaling } from './modules/TemplateScaling.js';
import { AbilityRecharge } from './modules/AbilityRecharge.js';
import { Regeneration } from './modules/Regeneration.js';
import { LegendaryActionManagement } from './modules/LegendaryActionManagement.js';
import { LairActionManagement } from './modules/LairActionManagement.js';
import { GreatWound } from './modules/GreatWounds.js';
import { OpenWounds } from './modules/OpenWounds.js';
import { UndeadFortitude } from './modules/UndeadFortitude.js'

/**
 * Sub Apps
 */
import { ActionDialog } from './apps/action-dialog.js';
import { AD } from './apps/action-dialog-app.js';

const SUB_MODULES = {
  MODULE,
  logger,
  DnDWildMagic,
  RestEffects,
  CoverCalculator,
  ActionManagement,
  TemplateScaling,
  AbilityRecharge,
  Regeneration,
  LegendaryActionManagement,
  LairActionManagement,
  GreatWound,
  OpenWounds,
  UndeadFortitude,
};

const SUB_APPS = {
  ActionDialog,
  AD,
}

/*
  Initialize Module
*/
MODULE.build();

/*
  Initialize all Sub Modules
*/
Hooks.on(`setup`, () => {
  Object.values(SUB_MODULES).forEach(cl => cl.register());

  //GlobalTesting
  Object.entries(SUB_MODULES).forEach(([key, cl])=> window[key] = cl);
  Object.entries(SUB_APPS).forEach(([key, cl])=> window[key] = cl);
});
