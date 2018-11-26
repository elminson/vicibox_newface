<?php
/**
 * Created by PhpStorm.
 * User: elminsondeoleobaez
 * Date: 10/3/18
 * Time: 1:52 PM
 */
namespace Elminson\agc;

require __DIR__ . '/../vendor/autoload.php';

use PHPUnit\Framework\TestCase;

class testagc extends TestCase
{

    /**
     *
     */
    public function testFirstTestCase()
    {
        $agc = new agc();
        $this->assertEquals("index", $agc->index());
    }

}
