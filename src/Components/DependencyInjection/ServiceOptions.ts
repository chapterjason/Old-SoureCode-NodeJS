/*
 * This file is part of the SoureCode package.
 *
 * (c) chapterjason <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

export interface ServiceOptions {
    name: string;
    shared: boolean;
    private: boolean;
    tags: string[];
    aliases: string[];
}