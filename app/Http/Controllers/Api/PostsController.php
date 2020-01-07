<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://jsonplaceholder.typicode.com/posts');

        return json_decode($response->getBody(), true);
    }
}
