import React, { useState, } from "react";
import {Card} from 'antd'

import Week from "../components/cards/schuduleCard/Week";
import ColSchudule from "../components/cards/schuduleCard/Col";
import ActivForm from '../components/cards/schuduleCard/ActivForm'
import TranslationCard from '../components/cards/schuduleCard/TranslationsCard'
import GridSchudule from '../components/cards/schuduleCard/GridSchudule'

const SchuduleCard = () => {

 

  return (
    <Card>
      <Week />
      <ActivForm />
      <GridSchudule />
      <TranslationCard />
    </Card>
  );
};

export default SchuduleCard;